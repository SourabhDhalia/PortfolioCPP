import React from 'react';

/** Shared prop interface for all section components */
export interface SectionProps {
    isTransitioning?: boolean;
    /** Persisted project page index — survives AnimatePresence unmount */
    projectPageRef?: React.MutableRefObject<number>;
    /** Persisted work expanded index — survives AnimatePresence unmount */
    workExpandedRef?: React.MutableRefObject<number | null>;
}
