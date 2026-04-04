import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from 'react-router';
import './sidebar.css';

const SideBar = ({ isOpen, onClose, category }) => {
  const [subCategories, setSubCategories] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorOutside, setIsCursorOutside] = useState(false);

  const sliderRef = useRef(null);
  const animationFrameRef = useRef(null);
  const floatingCrossRef = useRef(null);
  const overlayRef = useRef(null);

  // FETCH SUB-CATEGORIES WITH CLEANUP TO AVOID CASCADING RENDERS
  useEffect(() => {
    const fetchSubCats = async () => {
      try {
        const response = await axios.get(`http://localhost:54807/cat/${category.nav_cat_id}/list/`);
        console.log("Here is data", response.data.data);

        setSubCategories(response.data.data);
      } catch (error) {
        console.error("Failed to fetch sub-categories", error);
      }
    };

    if (isOpen && category?.nav_cat_id) {
      fetchSubCats();
    }

    // Cleanup function: Resets state when sidebar closes or category changes
    return () => {
      setSubCategories([]);
    };
  }, [isOpen, category?.nav_cat_id]);

  // Handle Scroll Lock and Overlay
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');

      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      document.body.appendChild(overlay);
      overlay.addEventListener('click', onClose);
      overlayRef.current = overlay;
    } else {
      document.body.classList.remove('no-scroll', 'hide-cursor');
      document.documentElement.classList.remove('no-scroll');

      if (overlayRef.current) {
        overlayRef.current.removeEventListener('click', onClose);
        overlayRef.current.remove();
        overlayRef.current = null;
      }
    }
  }, [isOpen, onClose]);

  // Cursor Animation Logic
  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });

    if (sliderRef.current && isOpen) {
      const rect = sliderRef.current.getBoundingClientRect();
      const outside = (
        e.clientX < rect.left || e.clientX > rect.right ||
        e.clientY < rect.top || e.clientY > rect.bottom
      );
      setIsCursorOutside(outside);
      document.body.classList.toggle('hide-cursor', outside);
    }
  }, [isOpen]);

  useEffect(() => {
    const animateCursor = () => {
      setCursorPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.2,
        y: prev.y + (mousePosition.y - prev.y) * 0.2
      }));
      animationFrameRef.current = requestAnimationFrame(animateCursor);
    };
    animationFrameRef.current = requestAnimationFrame(animateCursor);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [mousePosition]);

  useEffect(() => {
    if (floatingCrossRef.current && isOpen && isCursorOutside) {
      floatingCrossRef.current.style.transform = `translate(-50%, -50%)`;
      floatingCrossRef.current.style.left = `${cursorPosition.x}px`;
      floatingCrossRef.current.style.top = `${cursorPosition.y}px`;
    }
  }, [cursorPosition, isOpen, isCursorOutside]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <>
      <div className={`slider ${isOpen ? 'active' : ''}`} ref={sliderRef}>
        <div className="title-cross-container">
          <h2>{category?.nav_cat_name || "Menu"}</h2>
          <button className="cross" onClick={onClose}>
            <i className="ri-close-large-fill"></i>
          </button>
        </div>
        <ul>
          {subCategories.length > 0 ? (
            subCategories.map((sub) => (
              <li key={sub.cat_id}>
                <Link className='link'
                  to={`/product/list/${sub.cat_id}`}
                  onClick={onClose}
                >
                  {sub.cat_name}
                </Link>
              </li>
            ))
          ) : (
            <li className="loading-text">No Items Found</li>
          )}
        </ul>
      </div>

      <div
        ref={floatingCrossRef}
        className={`floating-cross ${isOpen && isCursorOutside ? 'visible' : ''}`}
        onClick={onClose}
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          pointerEvents: isOpen && isCursorOutside ? 'auto' : 'none',
          zIndex: 9999
        }}
      >
        <i className="ri-close-line"></i>
      </div>
    </>
  );
};

export default SideBar;