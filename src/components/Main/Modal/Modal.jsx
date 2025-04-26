import { useState, useEffect } from 'react';

function Modal({ mp4, onClose }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (mp4) {
            // Her mp4 değiştiğinde state'i sıfırla
            setIsVisible(false);
            setIsClosing(false);
            
            // Açılış animasyonu için kısa bir gecikme
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 10);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [mp4]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsClosing(false);
            onClose();
        }, 300);
    };

    if (!mp4) return null;

    return (
        <div 
            className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-all duration-300 ease-in-out ${
                isVisible && !isClosing ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={handleClose}
        >
            <div 
                className={`m-2 bg-white rounded-lg w-full max-w-4xl shadow-lg transition-all duration-300 ease-in-out transform ${
                    isVisible && !isClosing ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <video 
                    src={`/videos/${mp4}.mp4`}
                    controls 
                    className="w-full rounded-lg"
                    autoPlay
                />
            </div>
        </div>
    );
}

export default Modal; 