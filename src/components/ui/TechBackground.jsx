import React, { useEffect, useRef } from 'react';

/**
 * TechBackground — Fondo interactivo de Placa Electrónica (PCB) de Alta Precisión.
 * Diseño serio, elegante y sobrio:
 * - Trazas de circuito ortogonales con quiebres a 45° y 90° (estilo pista de placa electrónica/motherboard).
 * - Vías y puntos de soldadura (pads circulares y anulares) en terminaciones y uniones.
 * - Impulsos luminosos (paquetes de electrones/luz) que recorren las pistas suavemente.
 * - Cadencia controlada: no es caótico ni carnavalesco; transmite ingeniería y precisión.
 * - Reacción suave al cursor: ilumina el pad más cercano y despacha un pulso elegante.
 */
const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Color primario de la luz de la placa: Cian tecnológico puro con blanco en el núcleo
    const PULSE_COLOR = { r: 56, g: 189, b: 248 }; // Sky cyan
    const ACCENT_COLOR = { r: 0, g: 240, b: 255 }; // Electric cyan
    const TRACE_BASE_COLOR = 'rgba(255, 255, 255, 0.045)';

    let circuits = [];
    let pulses = [];
    let vias = [];

    // Generar diseño de circuitos PCB con pistas estructuradas (rectas y esquinas a 45°)
    const generatePcbLayout = () => {
      circuits = [];
      pulses = [];
      vias = [];

      const gridSize = 80;
      const cols = Math.ceil(width / gridSize) + 1;
      const rows = Math.ceil(height / gridSize) + 1;

      // Cantidad de pistas maestras proporcionales a la pantalla (moderada, no saturada)
      const circuitCount = Math.floor((width * height) / 38000);
      const totalCircuits = Math.min(38, Math.max(18, circuitCount));

      for (let c = 0; c < totalCircuits; c++) {
        // Punto inicial alineado a la grilla
        const startCol = Math.floor(Math.random() * cols);
        const startRow = Math.floor(Math.random() * rows);
        let currX = startCol * gridSize + (Math.random() > 0.5 ? 0 : gridSize / 2);
        let currY = startRow * gridSize + (Math.random() > 0.5 ? 0 : gridSize / 2);

        const points = [{ x: currX, y: currY }];
        const segmentCount = 3 + Math.floor(Math.random() * 4); // 3 a 6 tramos por pista
        let dirX = Math.random() > 0.5 ? 1 : -1;
        let dirY = Math.random() > 0.5 ? 1 : -1;

        for (let s = 0; s < segmentCount; s++) {
          const moveType = Math.random();
          const dist = (1 + Math.floor(Math.random() * 2)) * gridSize;

          if (moveType < 0.45) {
            // Tramo horizontal
            currX += dirX * dist;
          } else if (moveType < 0.75) {
            // Tramo vertical
            currY += dirY * dist;
          } else {
            // Quiebre a 45 grados (marca distintiva de placas electrónicas)
            const diagonalDist = gridSize * 0.75;
            currX += dirX * diagonalDist;
            currY += dirY * diagonalDist;
          }

          // Invertir ocasionalmente la dirección para mantenerse dentro de pantalla
          if (currX < 40 || currX > width - 40) dirX *= -1;
          if (currY < 40 || currY > height - 40) dirY *= -1;

          points.push({ x: currX, y: currY });
        }

        // Calcular longitud total de la pista
        let totalLength = 0;
        const segmentLengths = [];
        for (let i = 0; i < points.length - 1; i++) {
          const dx = points[i + 1].x - points[i].x;
          const dy = points[i + 1].y - points[i].y;
          const len = Math.sqrt(dx * dx + dy * dy);
          segmentLengths.push(len);
          totalLength += len;
        }

        if (totalLength > 100) {
          const circuit = {
            id: c,
            points,
            segmentLengths,
            totalLength,
            activityGlow: 0,
          };
          circuits.push(circuit);

          // Registrar vías (pads de soldadura) en los extremos
          vias.push({
            x: points[0].x,
            y: points[0].y,
            radius: 3.5,
            glow: 0,
          });
          vias.push({
            x: points[points.length - 1].x,
            y: points[points.length - 1].y,
            radius: 3.5,
            glow: 0,
          });
        }
      }

      // Despachar 4 a 6 impulsos iniciales distribuidos
      const initialCount = Math.min(6, Math.max(3, Math.floor(circuits.length / 5)));
      for (let k = 0; k < initialCount; k++) {
        spawnPulse(Math.random());
      }
    };

    // Lanzar un impulso de luz que recorra una pista
    const spawnPulse = (initialProgress = 0, targetCircuit = null) => {
      if (circuits.length === 0) return;
      const circuit = targetCircuit || circuits[Math.floor(Math.random() * circuits.length)];
      
      // Velocidad constante, elegante y perceptible
      const speed = 0.003 + Math.random() * 0.003; 

      pulses.push({
        circuit,
        progress: initialProgress,
        speed,
        color: Math.random() > 0.85 ? ACCENT_COLOR : PULSE_COLOR,
        size: 3.2,
      });
    };

    generatePcbLayout();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      generatePcbLayout();
    };

    // Al mover el ratón, excitar suavemente una pista cercana sin exagerar
    let lastMouseSpawn = 0;
    const handleMouseMove = (e) => {
      const now = performance.now();
      if (now - lastMouseSpawn < 180) return; // Limitar frecuencia para mantener seriedad
      lastMouseSpawn = now;

      const mx = e.clientX;
      const my = e.clientY;

      // Buscar la pista más cercana al cursor
      let closestCircuit = null;
      let minDistance = 160;

      for (let i = 0; i < circuits.length; i++) {
        const c = circuits[i];
        for (let j = 0; j < c.points.length; j++) {
          const pt = c.points[j];
          const dist = Math.hypot(pt.x - mx, pt.y - my);
          if (dist < minDistance) {
            minDistance = dist;
            closestCircuit = c;
          }
        }
      }

      if (closestCircuit && pulses.length < 12) {
        closestCircuit.activityGlow = 0.7;
        spawnPulse(0, closestCircuit);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let frameCount = 0;

    // Obtener coordenada (x, y) de una pista según el progreso (0 a 1)
    const getPointAtProgress = (circuit, progress) => {
      const targetDist = progress * circuit.totalLength;
      let accumulated = 0;

      for (let i = 0; i < circuit.segmentLengths.length; i++) {
        const segLen = circuit.segmentLengths[i];
        if (accumulated + segLen >= targetDist || i === circuit.segmentLengths.length - 1) {
          const segProgress = (targetDist - accumulated) / (segLen || 1);
          const p1 = circuit.points[i];
          const p2 = circuit.points[i + 1];
          return {
            x: p1.x + (p2.x - p1.x) * segProgress,
            y: p1.y + (p2.y - p1.y) * segProgress,
          };
        }
        accumulated += segLen;
      }
      return circuit.points[circuit.points.length - 1];
    };

    const render = () => {
      frameCount++;
      ctx.clearRect(0, 0, width, height);

      // Despachar pulsos automáticos de forma sobria y periódica (cada ~1.5 a 2.5 seg)
      if (frameCount % 100 === 0 && pulses.length < 7) {
        spawnPulse(0);
      }

      // 1. Dibujar trazas de la placa PCB de fondo (estilo circuito electrónico sutil y nítido)
      for (let i = 0; i < circuits.length; i++) {
        const c = circuits[i];
        if (c.activityGlow > 0.01) {
          c.activityGlow *= 0.98; // Decaimiento suave
        } else {
          c.activityGlow = 0;
        }

        ctx.beginPath();
        ctx.moveTo(c.points[0].x, c.points[0].y);
        for (let j = 1; j < c.points.length; j++) {
          ctx.lineTo(c.points[j].x, c.points[j].y);
        }

        if (c.activityGlow > 0.05) {
          // Pista excitada con halo de luz elegante
          ctx.strokeStyle = `rgba(${PULSE_COLOR.r}, ${PULSE_COLOR.g}, ${PULSE_COLOR.b}, ${0.08 + c.activityGlow * 0.25})`;
          ctx.lineWidth = 1.6;
        } else {
          // Pista en estado de reposo (circuito oscuro de precisión)
          ctx.strokeStyle = TRACE_BASE_COLOR;
          ctx.lineWidth = 1.0;
        }
        ctx.stroke();
      }

      // 2. Dibujar vías de soldadura (anillos circulares en las uniones de la placa)
      for (let i = 0; i < vias.length; i++) {
        const v = vias[i];
        if (v.glow > 0.01) v.glow *= 0.97;

        // Anillo exterior de cobre
        ctx.beginPath();
        ctx.arc(v.x, v.y, v.radius, 0, Math.PI * 2);
        if (v.glow > 0.1) {
          ctx.strokeStyle = `rgba(${PULSE_COLOR.r}, ${PULSE_COLOR.g}, ${PULSE_COLOR.b}, ${0.4 + v.glow * 0.5})`;
          ctx.lineWidth = 1.5;
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.09)';
          ctx.lineWidth = 1.0;
        }
        ctx.stroke();

        // Agujero central de la vía
        ctx.beginPath();
        ctx.arc(v.x, v.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = v.glow > 0.1 ? `rgba(${PULSE_COLOR.r}, ${PULSE_COLOR.g}, ${PULSE_COLOR.b}, 0.8)` : 'rgba(255, 255, 255, 0.06)';
        ctx.fill();
      }

      // 3. Dibujar y avanzar los paquetes de luz (pulsos) que recorren las pistas
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          // Al llegar al final de la pista, encender la vía de soldadura de llegada
          const lastPoint = p.circuit.points[p.circuit.points.length - 1];
          const endVia = vias.find(v => Math.hypot(v.x - lastPoint.x, v.y - lastPoint.y) < 10);
          if (endVia) endVia.glow = 1.0;

          // Ocasionalmente conectar con otra pista adyacente para continuidad orgánica
          if (Math.random() < 0.4 && pulses.length < 8) {
            const nextCircuit = circuits.find(c => 
              c !== p.circuit && 
              Math.hypot(c.points[0].x - lastPoint.x, c.points[0].y - lastPoint.y) < 30
            );
            if (nextCircuit) {
              spawnPulse(0, nextCircuit);
            }
          }

          pulses.splice(i, 1);
          continue;
        }

        // Posición actual de la cabeza del pulso
        const head = getPointAtProgress(p.circuit, p.progress);

        // Excitar la pista a su paso
        p.circuit.activityGlow = Math.max(p.circuit.activityGlow, 0.6);

        // Estela suave que recorre la pista detrás de la cabeza
        const trailLength = 0.16;
        const steps = 7;
        for (let s = 1; s <= steps; s++) {
          const trailProg = Math.max(0, p.progress - (trailLength * (s / steps)));
          const trailPt = getPointAtProgress(p.circuit, trailProg);
          const alpha = (1 - s / steps) * 0.45;

          ctx.beginPath();
          ctx.arc(trailPt.x, trailPt.y, p.size * (1 - (s / steps) * 0.5), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
          ctx.fill();
        }

        // Resplandor exterior difuso (glow) alrededor del pulso
        const aura = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, p.size * 5);
        aura.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.65)`);
        aura.addColorStop(0.4, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.2)`);
        aura.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(head.x, head.y, p.size * 5, 0, Math.PI * 2);
        ctx.fill();

        // Cabeza brillante con centro blanco puro
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(head.x, head.y, p.size * 0.75, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="tech-circuit-canvas"
      aria-hidden="true"
    />
  );
};

export default TechBackground;
