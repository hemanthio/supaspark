'use client'

import React, { useState } from 'react';
import { Home, Camera, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: Camera, label: 'Camera' },
  { icon: MessageCircle, label: 'Messages' }
];

export default function Component() {
  const [activeItem, setActiveItem] = useState(0);
  const [hoverItem, setHoverItem] = useState(null);

  const currentItem = hoverItem !== null ? hoverItem : activeItem;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <nav className="h-[52px] rounded-full flex items-center bg-white shadow-lg p-1.5 gap-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = currentItem === index;

          return (
            <motion.button
              key={index}
              layout
              initial={false}
              animate={{
                width: isActive ? 140 : 50,
                backgroundColor: isActive ? '#000' : '#DFDFE3'
              }}
              whileHover={{
                backgroundColor: isActive ? '#000' : '##DFDFE3'
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 40
              }}
              onClick={() => setActiveItem(index)}
              onMouseEnter={() => setHoverItem(index)}
              onMouseLeave={() => setHoverItem(null)}
              className="h-10 rounded-full flex items-center justify-center gap-2"
            >
              <motion.div
                layout
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Icon className="w-5 h-5 text-white" />
              </motion.div>
              <AnimatePresence mode="popLayout">
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ 
                      opacity: 1, 
                      width: "auto",
                      transition: { 
                        opacity: { duration: 0.3 },
                        width: { duration: 0.2 } 
                      } 
                    }}
                    exit={{ 
                      opacity: 0,
                      width: 0,
                      transition: { 
                        opacity: { duration: 0.2 },
                        width: { duration: 0.2 }
                      }
                    }}
                    className="text-[15px] font-medium text-white whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </nav>
    </div>
  );
}