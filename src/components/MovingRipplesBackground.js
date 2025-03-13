"use client";
import { useEffect, useRef } from "react";

export default function MovingRipplesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let ripples = [];

    // Ripple class
    class Ripple {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 3; // Initial radius
        this.maxRadius = Math.random() * 66 + 33; // Max radius for ripple
        this.speed = Math.random() * 9.5 + 0.1; // Speed of expansion
        this.opacity = 1; // Starting opacity
      }

      update() {
        this.radius += this.speed; // Expand radius
        this.opacity -= 0.01; // Fade out as it expands
        if (this.opacity <= 0) this.opacity = 0; // Remove after fade-out
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = `rgba(59, 130, 246, ${this.opacity})`; // White color with fading opacity
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
      }
    }

    // Initialize ripples (on click or random)
    function initRipples(x, y) {
      ripples.push(new Ripple(x, y));
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, width, height); // Clear canvas
      ripples.forEach((ripple, index) => {
        ripple.update();
        ripple.draw();

        // Remove ripples that have fully faded
        if (ripple.opacity <= 0) {
          ripples.splice(index, 1);
        }
      });

      requestAnimationFrame(animate); // Repeat the animation
    }

    // Resize event
    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    // Add ripple on click
    function handleClick(event) {
      const x = event.clientX;
      const y = event.clientY;
      initRipples(x, y);
    }

    // Randomly generate ripples at intervals
    function generateRandomRipples() {
      const x = Math.random() * width;
      const y = Math.random() * height;
      initRipples(x, y);
    }

    // Add event listeners
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("click", handleClick);

    // Generate random ripples every 2 seconds
    const randomRippleInterval = setInterval(generateRandomRipples, 2000);

    initRipples(width / 2, height / 2); // Add a ripple at the center initially
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("click", handleClick);
      clearInterval(randomRippleInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-[-1] pointer-events-none"
      style={{ top: 0, left: 0 }}
    />
  );
}
