import './sheet.scss';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react'

type Props = {
  arialabel: string;
  open: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

type ContentProps = {
  open: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

export default function Sheet({ arialabel, open, children, onClose }: Props) {
  return (
    createPortal(
      <SheetContent open={open} onClose={onClose}>{children}</SheetContent>,
      document.body,
      arialabel
    )
  );
}

function SheetContent({ open, children, onClose }: ContentProps) {

  return (
    <>
      <AnimatePresence>
        {open && <motion.div onClick={onClose} className="ath-sheet__overlay" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}></motion.div>}
      </AnimatePresence>
      <AnimatePresence>
        {open &&
          <motion.div className="ath-sheet"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%', transition: { opacity: { duration: 0.38 }, x: { duration: 0.28 } } }}
            transition={{
              opacity: { duration: 0.38 },
              x: { duration: 0.28 }
            }}
            onClick={(e) => e.stopPropagation()}>
            {children}
          </motion.div>
        }
      </AnimatePresence>
    </>
  )
}
