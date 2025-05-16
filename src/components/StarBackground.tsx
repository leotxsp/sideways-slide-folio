
/**
 * Stars
 * Inspired by Steve Courtney's poster art for Celsius GS's Drifter - http://celsiusgs.com/drifter/posters.php
 * by Cory Hughart - http://coryhughart.com
 */





import React, { useEffect, useRef, useState } from 'react';
import Delaunay from 'delaunay-fast';

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [delaunayLoaded, setDelaunayLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Variables
    const particleCount = 40;
    const flareCount = 10;
    const motion = 0.05;
    const tilt = 0.05;
    const color = '#FFEED4';
    const particleSizeBase = 1;
    const particleSizeMultiplier = 0.5;
    const flareSizeBase = 100;
    const flareSizeMultiplier = 100;
    const lineWidth = 1;
    const linkChance = 100;
    const linkLengthMin = 5;
    const linkLengthMax = 7;
    const linkOpacity = 0.25;
    const linkFade = 90;
    const linkSpeed = 1;
    const glareAngle = -60;
    const glareOpacityMultiplier = 0.05;
    const renderParticles = true;
    const renderParticleGlare = true;
    const renderFlares = true;
    const renderLinks = true;
    const renderMesh = false;
    const flicker = true;
    const flickerSmoothing = 15;
    const blurSize = 0;
    const randomMotion = true;
    const noiseLength = 1000;
    const noiseStrength = 1;

    let mouse = { x: 0, y: 0 };
    let r = 0;
    let c = 1000;
    let n = 0;
    let nAngle = (Math.PI * 2) / noiseLength;
    let nRad = 100;
    let nPos = { x: 0, y: 0 };
    let points: number[][] = [];
    let vertices: number[] = [];
    let triangles: number[][] = [];
    let links: any[] = [];
    let particles: any[] = [];
    let flares: any[] = [];

    // Utility functions
    function random(min: number, max: number, float?: boolean) {
      return float
        ? Math.random() * (max - min) + min
        : Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function sizeRatio() {
      return canvas.width >= canvas.height ? canvas.width : canvas.height;
    }

    function position(x: number, y: number, z: number) {
      return {
        x: (x * canvas.width) + ((((canvas.width / 2) - mouse.x + ((nPos.x - 0.5) * noiseStrength)) * z) * motion),
        y: (y * canvas.height) + ((((canvas.height / 2) - mouse.y + ((nPos.y - 0.5) * noiseStrength)) * z) * motion)
      };
    }

    function noisePoint(i: number) {
      const a = nAngle * i;
      const cosA = Math.cos(a);
      const sinA = Math.sin(a);
      const rad = nRad;
      return {
        x: rad * cosA,
        y: rad * sinA
      };
    }

    function resize() {
      canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
      canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
    }

    // Particle class
    class Particle {
      x: number;
      y: number;
      z: number;
      color: string;
      opacity: number;
      flicker: number;
      neighbors: number[];

      constructor() {
        this.x = random(-0.1, 1.1, true);
        this.y = random(-0.1, 1.1, true);
        this.z = random(0, 4);
        this.color = color;
        this.opacity = random(0.1, 1, true);
        this.flicker = 0;
        this.neighbors = [];
      }

      render() {
        const pos = position(this.x, this.y, this.z);
        const r = ((this.z * particleSizeMultiplier) + particleSizeBase) * (sizeRatio() / 1000);
        let o = this.opacity;

        if (flicker) {
          const newVal = random(-0.5, 0.5, true);
          this.flicker += (newVal - this.flicker) / flickerSmoothing;
          if (this.flicker > 0.5) this.flicker = 0.5;
          if (this.flicker < -0.5) this.flicker = -0.5;
          o += this.flicker;
          if (o > 1) o = 1;
          if (o < 0) o = 0;
        }

        if (!context) return;
        
        context.fillStyle = this.color;
        context.globalAlpha = o;
        context.beginPath();
        context.arc(pos.x, pos.y, r, 0, 2 * Math.PI, false);
        context.fill();
        context.closePath();

        if (renderParticleGlare) {
          context.globalAlpha = o * glareOpacityMultiplier;
          context.beginPath();
          context.ellipse(
            pos.x, 
            pos.y, 
            r * 100, 
            r, 
            (glareAngle - ((nPos.x - 0.5) * noiseStrength * motion)) * (Math.PI / 180), 
            0, 
            2 * Math.PI, 
            false
          );
          context.fill();
          context.closePath();
        }

        context.globalAlpha = 1;
      }
    }

    // Flare class
    class Flare {
      x: number;
      y: number;
      z: number;
      color: string;
      opacity: number;

      constructor() {
        this.x = random(-0.25, 1.25, true);
        this.y = random(-0.25, 1.25, true);
        this.z = random(0, 2);
        this.color = color;
        this.opacity = random(0.001, 0.01, true);
      }

      render() {
        const pos = position(this.x, this.y, this.z);
        const r = ((this.z * flareSizeMultiplier) + flareSizeBase) * (sizeRatio() / 1000);

        if (!context) return;
        
        context.beginPath();
        context.globalAlpha = this.opacity;
        context.arc(pos.x, pos.y, r, 0, 2 * Math.PI, false);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
        context.globalAlpha = 1;
      }
    }

    // Link class
    class Link {
      length: number;
      verts: number[];
      stage: number;
      linked: number[];
      distances: number[];
      traveled: number;
      fade: number;
      finished: boolean;

      constructor(startVertex: number, numPoints: number) {
        this.length = numPoints;
        this.verts = [startVertex];
        this.stage = 0;
        this.linked = [startVertex];
        this.distances = [];
        this.traveled = 0;
        this.fade = 0;
        this.finished = false;
      }

      drawLine(points: [number, number][], alpha?: number) {
        if (typeof alpha !== 'number') alpha = linkOpacity;

        if (!context) return;
        
        if (points.length > 1 && alpha > 0) {
          context.globalAlpha = alpha;
          context.beginPath();
          for (let i = 0; i < points.length - 1; i++) {
            context.moveTo(points[i][0], points[i][1]);
            context.lineTo(points[i + 1][0], points[i + 1][1]);
          }
          context.strokeStyle = color;
          context.lineWidth = lineWidth;
          context.stroke();
          context.closePath();
          context.globalAlpha = 1;
        }
      }

      render() {
        let i, p, pos, points;

        switch (this.stage) {
          // VERTEX COLLECTION STAGE
          case 0:
            const last = particles[this.verts[this.verts.length - 1]];
            
            if (last && last.neighbors && last.neighbors.length > 0) {
              const neighbor = last.neighbors[random(0, last.neighbors.length - 1)];
              if (this.verts.indexOf(neighbor) === -1) {
                this.verts.push(neighbor);
              }
            } else {
              this.stage = 3;
              this.finished = true;
            }

            if (this.verts.length >= this.length) {
              for (i = 0; i < this.verts.length - 1; i++) {
                const p1 = particles[this.verts[i]];
                const p2 = particles[this.verts[i + 1]];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                this.distances.push(dist);
              }
              this.stage = 1;
            }
            break;

          // RENDER LINE ANIMATION STAGE
          case 1:
            if (this.distances.length > 0) {
              points = [] as [number, number][];

              for (i = 0; i < this.linked.length; i++) {
                p = particles[this.linked[i]];
                pos = position(p.x, p.y, p.z);
                points.push([pos.x, pos.y]);
              }

              const linkSpeedRel = linkSpeed * 0.00001 * canvas.width;
              this.traveled += linkSpeedRel;
              const d = this.distances[this.linked.length - 1];
              
              if (this.traveled >= d) {
                this.traveled = 0;
                this.linked.push(this.verts[this.linked.length]);
                p = particles[this.linked[this.linked.length - 1]];
                pos = position(p.x, p.y, p.z);
                points.push([pos.x, pos.y]);

                if (this.linked.length >= this.verts.length) {
                  this.stage = 2;
                }
              } else {
                const a = particles[this.linked[this.linked.length - 1]];
                const b = particles[this.verts[this.linked.length]];
                const t = d - this.traveled;
                const x = ((this.traveled * b.x) + (t * a.x)) / d;
                const y = ((this.traveled * b.y) + (t * a.y)) / d;
                const z = ((this.traveled * b.z) + (t * a.z)) / d;
                pos = position(x, y, z);
                points.push([pos.x, pos.y]);
              }

              this.drawLine(points);
            } else {
              this.stage = 3;
              this.finished = true;
            }
            break;

          // FADE OUT STAGE
          case 2:
            if (this.verts.length > 1) {
              if (this.fade < linkFade) {
                this.fade++;
                points = [] as [number, number][];
                const alpha = (1 - (this.fade / linkFade)) * linkOpacity;
                
                for (i = 0; i < this.verts.length; i++) {
                  p = particles[this.verts[i]];
                  pos = position(p.x, p.y, p.z);
                  points.push([pos.x, pos.y]);
                }
                
                this.drawLine(points, alpha);
              } else {
                this.stage = 3;
                this.finished = true;
              }
            } else {
              this.stage = 3;
              this.finished = true;
            }
            break;

          // FINISHED STAGE
          case 3:
          default:
            this.finished = true;
            break;
        }
      }
    }

    function startLink(vertex: number, length: number) {
      links.push(new Link(vertex, length));
    }

    function render() {
      if (randomMotion) {
        n++;
        if (n >= noiseLength) {
          n = 0;
        }
        nPos = noisePoint(n);
      }

      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        if (blurSize > 0) {
          context.shadowBlur = blurSize;
          context.shadowColor = color;
        }

        if (renderParticles) {
          for (let i = 0; i < particleCount; i++) {
            particles[i].render();
          }
        }

        if (renderMesh) {
          context.beginPath();
          for (let v = 0; v < vertices.length - 1; v++) {
            if ((v + 1) % 3 === 0) { continue; }
            const p1 = particles[vertices[v]];
            const p2 = particles[vertices[v + 1]];
            const pos1 = position(p1.x, p1.y, p1.z);
            const pos2 = position(p2.x, p2.y, p2.z);
            context.moveTo(pos1.x, pos1.y);
            context.lineTo(pos2.x, pos2.y);
          }
          context.strokeStyle = color;
          context.lineWidth = lineWidth;
          context.stroke();
          context.closePath();
        }

        if (renderLinks) {
          if (random(0, linkChance) === linkChance) {
            const length = random(linkLengthMin, linkLengthMax);
            const start = random(0, particles.length - 1);
            startLink(start, length);
          }

          for (let l = links.length - 1; l >= 0; l--) {
            if (links[l] && !links[l].finished) {
              links[l].render();
            } else {
              links.splice(l, 1);
            }
          }
        }

        if (renderFlares) {
          for (let j = 0; j < flareCount; j++) {
            flares[j].render();
          }
        }
      }
    }

    function init() {
      resize();

      mouse.x = canvas.clientWidth / 2;
      mouse.y = canvas.clientHeight / 2;

      // Create particles
      for (let i = 0; i < particleCount; i++) {
        const p = new Particle();
        particles.push(p);
        points.push([p.x * c, p.y * c]);
      }

      // Delaunay triangulation
      vertices = Delaunay.triangulate(points);
      
      // Create triangles
      let tri: number[] = [];
      for (let i = 0; i < vertices.length; i++) {
        if (tri.length === 3) {
          triangles.push(tri);
          tri = [];
        }
        tri.push(vertices[i]);
      }

      // Set neighbors
      for (let i = 0; i < particles.length; i++) {
        for (let j = 0; j < triangles.length; j++) {
          const k = triangles[j].indexOf(i);
          if (k !== -1) {
            triangles[j].forEach((value) => {
              if (value !== i && particles[i].neighbors.indexOf(value) === -1) {
                particles[i].neighbors.push(value);
              }
            });
          }
        }
      }

      if (renderFlares) {
        for (let i = 0; i < flareCount; i++) {
          flares.push(new Flare());
        }
      }

      // Event listeners
      document.body.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });

      window.addEventListener('resize', resize);

      // Animation loop
      function animloop() {
        window.requestAnimationFrame(animloop);
        resize();
        render();
      }
      
      animloop();
    }

    init();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      document.body.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      id="stars" 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ 
        backgroundColor: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default StarBackground;