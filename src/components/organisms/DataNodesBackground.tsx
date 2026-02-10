"use client";

import { useEffect, useRef } from "react";
import { css } from "../../../styled-system/css";

interface DataNode {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
}

export const DataNodesBackground = () => {
    const canvasRef = useRef<HTMLDivElement>(null);
    const nodesRef = useRef<HTMLDivElement[]>([]);
    const NODE_COUNT = 15;

    useEffect(() => {
        if (!canvasRef.current) return;

        // Clear existing nodes
        canvasRef.current.innerHTML = "";
        nodesRef.current = [];

        // Create nodes
        for (let i = 0; i < NODE_COUNT; i++) {
            const node = document.createElement("div");
            node.className = "node-dot";

            const size = Math.random() * 4 + 2;
            node.style.width = `${size}px`;
            node.style.height = `${size}px`;
            node.style.left = `${Math.random() * 100}%`;
            node.style.top = `${Math.random() * 100}%`;

            canvasRef.current.appendChild(node);
            nodesRef.current.push(node);

            // Start animation lifecycle
            animateNode(node);
        }

        return () => {
            if (canvasRef.current) {
                canvasRef.current.innerHTML = "";
            }
        };
    }, []);

    const animateNode = (node: HTMLDivElement) => {
        const cycle = () => {
            // Random delay before showing
            setTimeout(() => {
                node.style.opacity = (Math.random() * 0.3 + 0.1).toString();

                // Stay visible for random time
                setTimeout(() => {
                    node.style.opacity = "0";

                    // Move and restart after fade out
                    setTimeout(() => {
                        node.style.left = `${Math.random() * 100}%`;
                        node.style.top = `${Math.random() * 100}%`;
                        cycle();
                    }, 2000);
                }, Math.random() * 3000 + 2000);
            }, Math.random() * 5000);
        };

        cycle();
    };

    const containerStyles = css({
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
    });

    return <div ref={canvasRef} id="node-canvas" className={containerStyles} />;
};
