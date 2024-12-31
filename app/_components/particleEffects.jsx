"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const FireEffect = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesConfig = {
        particles: {
            color: {
                value: ["#ff8844", "#ffbb00", "#ff4400"],
            },
            move: {
                direction: "up",
                enable: true,
                outModes: {
                    default: "out",
                },
                random: true,
                speed: { min: 1, max: 3 },
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 400,
            },
            opacity: {
                value: { min: 0.1, max: 0.5 },
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        background: {
            color: {
                value: "transparent",
            },
        },
    };

    return (
        <Particles
            id="fireParticles"
            options={particlesConfig}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
};

const SnowEffect = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesConfig = {
        particles: {
            color: {
                value: "#ffffff"
            },
            move: {
                direction: "bottom",
                enable: true,
                outModes: {
                    default: "out"
                },
                random: true,
                speed: { min: 0.5, max: 2 },
                straight: false,
                wobble: {
                    enable: true,
                    distance: 10,
                    speed: 2
                }
            },
            number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 300
            },
            opacity: {
                value: { min: 0.4, max: 0.8 },
                animation: {
                    enable: true,
                    speed: 0.5,
                    minimumValue: 0.1
                }
            },
            shape: {
                type: "circle"
            },
            size: {
                value: { min: 1, max: 4 }
            },
            twinkle: {
                particles: {
                    enable: true,
                    frequency: 0.05,
                    opacity: 1
                }
            }
        },
        background: {
            color: {
                value: "transparent"
            }
        }
    };

    return (
        <Particles
            id="tsparticles"
            options={particlesConfig}
            className="fixed inset-0 z-0"
        />
    );
};

const FirefliesEffect = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesConfig = {
        particles: {
            color: {
                value: ["#ffff00", "#ddff00", "#ffdd00"]
            },
            move: {
                direction: "random",
                enable: true,
                outModes: {
                    default: "out"
                },
                random: true,
                speed: { min: 0.5, max: 2 },
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 300
            },
            opacity: {
                value: { min: 0.4, max: 1.0 },
                animation: {
                    enable: true,
                    speed: 0.5,
                    minimumValue: 0.1
                }
            },
            shape: {
                type: "circle"
            },
            size: {
                value: { min: 0.5, max: 3 }
            },
            twinkle: {
                particles: {
                    enable: true,
                    frequency: 0.05,
                    opacity: 1
                }
            }
        },
        background: {
            color: {
                value: "transparent"
            }
        }
    };

    return (
        <Particles
            id="firefliesParticles"
            options={particlesConfig}
            className="fixed inset-0 z-0"
        />
    );
};


export { FireEffect, SnowEffect, FirefliesEffect };