'use client';

import { MotionValue, useTransform, motion } from 'framer-motion';
import { Shield, Wrench, Clock, AlertTriangle } from 'lucide-react';

interface ServiceGlassOverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function ServiceGlassOverlay({ scrollYProgress }: ServiceGlassOverlayProps) {
    // Opacity transforms for different sections

    // Hero: Visible 0-20%
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);

    // Services: Visible 20-45%
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.4, 0.45], [0, 1, 1, 0]);

    // Process: Visible 45-75%
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);

    // Emergency: Visible 75-100%
    const opacity4 = useTransform(scrollYProgress, [0.75, 0.8], [0, 1]);

    // Remove Y transforms to prevent layout issues
    const y1 = 0;
    const y2 = 0;
    const y3 = 0;
    const y4 = 0;

    return (
        <div className="absolute inset-0 pointer-events-none z-10">
            <div className="container mx-auto px-4 h-full relative">

                {/* Phase 1: Hero - REMOVED */}
                {/* <motion.div ... > ... </motion.div> */}

                {/* Phase 2: Services - REMOVED */}
                {/* <motion.div ... > ... </motion.div> */}

                {/* Phase 3: Process - REMOVED */}
                {/* <motion.div ... > ... </motion.div> */}

                {/* Phase 4: Emergency CTA */}
                <motion.div
                    style={{ opacity: opacity4, y: y4 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md pointer-events-auto"
                >
                    <div className="emergency-glass rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
                        <div className="inline-flex p-4 rounded-full bg-white/20 mb-6 animate-pulse">
                            <AlertTriangle className="w-12 h-12" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Crack Spreading?</h2>
                        <p className="text-white/90 mb-8 text-lg">
                            Don't risk your safety. Our emergency team is available 24/7 for immediate dispatch.
                        </p>
                        <a
                            href="tel:425-399-3393"
                            className="block w-full bg-white text-red-600 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg"
                        >
                            CALL EMERGENCY NOW
                        </a>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
