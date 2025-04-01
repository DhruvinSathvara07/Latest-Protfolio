import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import "./Stack.css";

function CardRotate({ children, onSendToBack, sensitivity }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [60, -60]);
    const rotateY = useTransform(x, [-100, 100], [-60, 60]);

    function handleDragEnd(_, info) {
        if (
            Math.abs(info.offset.x) > sensitivity ||
            Math.abs(info.offset.y) > sensitivity
        ) {
            onSendToBack();
        } else {
            x.set(0);
            y.set(0);
        }
    }

    return (
        <motion.div
            className="card-rotate"
            style={{ x, y, rotateX, rotateY }}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragElastic={0.6}
            whileTap={{ cursor: "grabbing" }}
            onDragEnd={handleDragEnd}
        >
            {children}
        </motion.div>
    );
}

export default function Stack({
    randomRotation = false,
    sensitivity = 200,
    cardDimensions = { width: 208, height: 208 },
    cardsData = [],
    animationConfig = { stiffness: 260, damping: 20 },
    sendToBackOnClick = false
}) {
    const [cards, setCards] = useState(
        cardsData.length
            ? cardsData
            : [
                { id: 12, img: "figma-logo-animation-unscreen.gif" },
                { id: 11, img: "download.png" },
                { id: 10, img: "GIT.gif" },
                { id: 9, img: "mongos.gif" },
                { id: 8, img: "NODE.gif" },
                { id: 7, img: "firebase.gif" },
                { id: 6, img: "redux.svg" },
                { id: 5, img: "REACT.gif" },
                { id: 4, img: "JS.gif" },
                { id: 3, img: "bootstrap.webp" },
                { id: 2, img: "CSS3.gif" },
                { id: 1, img: "html.gif" },
            ]
    );

    const sendToBack = (id) => {
        setCards((prev) => {
            const newCards = [...prev];
            const index = newCards.findIndex((card) => card.id === id);
            const [card] = newCards.splice(index, 1);
            newCards.unshift(card);
            return newCards;
        });
    };

    return (
        <div
            className="stack-container"
            style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
                perspective: 600,
            }}
        >
            {cards.map((card, index) => {
                const randomRotate = randomRotation
                    ? Math.random() * 10 - 5 // Random degree between -5 and 5
                    : 0;

                return (
                    <CardRotate
                        key={card.id}
                        onSendToBack={() => sendToBack(card.id)}
                        sensitivity={sensitivity}
                    >
                        <motion.div
                            className="card"
                            onClick={() => sendToBackOnClick && sendToBack(card.id)}
                            animate={{
                                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                                scale: 1 + index * 0.06 - cards.length * 0.06,
                                transformOrigin: "90% 90%",
                            }}
                            initial={false}
                            transition={{
                                type: "spring",
                                stiffness: animationConfig.stiffness,
                                damping: animationConfig.damping,
                            }}
                            style={{
                                width: cardDimensions.width,
                                height: cardDimensions.height,
                            }}
                        >
                            <img
                                style={{ objectFit: "contain" }}
                                src={card.img}
                                alt={`card-${card.id}`}
                                className="card-image img-fluid"
                            />
                        </motion.div>
                    </CardRotate>
                );
            })}
        </div>
    );
}