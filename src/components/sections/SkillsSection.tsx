import { motion } from 'framer-motion';
import { skills } from '../../data';
import type { SectionProps } from '../../types';

const SkillsSection = (_props: SectionProps) => (
    <div className="space-y-6">
        {skills.map((skillGroup, i) => (
            <motion.div
                key={skillGroup.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-5"
            >
                <h4 className="font-semibold text-[var(--text-primary)] mb-3">{skillGroup.label}</h4>
                <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                        <span key={item} className="chip hover:chip-accent cursor-default">
                            {item}
                        </span>
                    ))}
                </div>
            </motion.div>
        ))}
    </div>
);

export default SkillsSection;
