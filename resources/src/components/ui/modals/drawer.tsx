import "./drawer.scss";
import { createPortal } from 'react-dom';
import { AnimatePresence,motion } from 'motion/react'

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

export default function Drawer({ arialabel, open, children, onClose }: Props) {
    return (
        createPortal(
          <DrawerContent open={open} onClose={onClose}>{children}</DrawerContent>,
          document.body,
          arialabel
        )
      );
}

function DrawerContent({ open,children,onClose }: ContentProps) {

    return (
        <>
        <AnimatePresence>
          {open && <motion.div onClick={onClose} className="ath-drawer__overlay" initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}></motion.div>}
        </AnimatePresence>
        <AnimatePresence>
          {open &&
          <motion.div className="ath-drawer" 
            initial={{ opacity: 0, y: '100%' }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: '100%', transition: { opacity: { duration: 0.38 }, y: { duration: 0.28 } } }} 
            transition={{ 
              opacity: { duration: 0.38 },
              y: { duration: 0.28 }
            }}>
            <div className="ath-drawer__content">
              {children}
            </div>
          </motion.div>
          } 
        </AnimatePresence>
        </>
    )
}