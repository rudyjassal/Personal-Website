"use client";

import type { TargetAndTransition } from "motion/react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const initialProps: TargetAndTransition = {
  pathLength: 0,
  opacity: 0,
};

const animateProps: TargetAndTransition = {
  pathLength: 1,
  opacity: 1,
};

type Props = React.ComponentProps<typeof motion.svg> & {
  speed?: number;
  onAnimationComplete?: () => void;
};

function AppleHelloVietnameseEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1009 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="14.8883"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>xin chào</title>

      {/* x1 */}
      <motion.path
        d="M102.233 96.2277C75.6823 127.245 45.1612 158.759 11.4143 190.521"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.3),
          ease: "easeInOut",
          opacity: { duration: 0.15 },
        }}
      />

      {/* x2 */}
      <motion.path
        d="M7.69214 116.575C9.67725 105.16 16.8733 95.7311 28.5358 95.7311C40.4465 95.7311 46.8981 105.408 53.3497 124.019C56.7409 133.283 60.1322 142.547 63.5234 151.81C73.689 179.58 81.1988 191.513 100.855 191.513C128.722 191.513 154.043 159.148 161.595 118.502C162.929 111.321 164.774 103.736 166.043 96.2273"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.7),
          ease: "easeInOut",
          delay: calc(0.4),
          opacity: { duration: 0.35, delay: calc(0.4) },
        }}
      />

      {/* i */}
      <motion.path
        d="M166.043 96.2273C163.191 113.101 160.565 126.997 158.92 139.404C157.989 147.592 157.544 154.54 157.596 161.488C157.729 179.354 164.764 191.513 182.695 191.513C209.39 191.513 236.181 159.123 243.73 118.5C245.064 111.321 247.012 103.759 248.139 96.2273"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.5),
          ease: "easeOut",
          delay: calc(1),
          opacity: { duration: 0.25, delay: calc(1) },
        }}
      />

      {/* n1 */}
      <motion.path
        d="M248.139 96.2278C243.424 127.741 239.454 158.759 234.491 190.272"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.3),
          ease: "easeOut",
          delay: calc(1.5),
          opacity: { duration: 0.15, delay: calc(1.5) },
        }}
      />

      {/* n2 */}
      <motion.path
        d="M237.873 167.951C244.704 121.32 265.508 94.2422 290.322 94.2422C307.692 94.2422 316.625 106.153 315.136 123.026C313.896 135.681 309.677 150.322 308.685 162.729C307.444 179.85 316.499 191.513 330.769 191.513C348.722 191.513 359.309 179.314 364.143 165.965"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.9),
          ease: "easeOut",
          delay: calc(1.8),
          opacity: { duration: 0.45, delay: calc(1.8) },
        }}
      />

      {/* c, h1 */}
      <motion.path
        d="M535.91 109.876C531.265 100.446 520.943 93.4984 505.459 93.4984C476.516 93.4984 462.044 117.816 462.044 143.374C462.044 171.503 482.265 192.506 511.307 192.506C559.762 192.506 592.902 136.708 621.581 97.8807C640.764 71.9101 649.874 49.2359 650.372 31.1674C650.62 17.7684 644.168 7.60362 632.01 7.60362C618.61 7.60362 610.173 17.7684 604.963 41.1011C599.255 66.7441 595.037 96.1684 584.367 190.521"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1.1),
          ease: "easeInOut",
          delay: calc(2.6),
          opacity: { duration: 0.55, delay: calc(2.6) },
        }}
      />

      {/* h2 */}
      <motion.path
        d="M585.413 181.299C590.677 135.025 611.663 98.2125 638.213 98.2125C654.094 98.2125 664.187 110.868 661.321 128.982C659.708 139.652 656.794 152.059 655.128 164.217C653.102 179.602 658.89 191.513 676.813 191.513C702.178 191.513 717.375 164.077 725.613 135.196"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1),
          ease: "easeInOut",
          delay: calc(3.6),
          opacity: { duration: 0.5, delay: calc(3.6) },
        }}
      />

      {/* a1 */}
      <motion.path
        d="M803.871 112.995C799.007 101.8 788.666 94.2423 772.207 94.2423C744.912 94.2423 724.398 121.538 723.052 150.818C721.878 177.617 734.244 192.681 751.857 192.505C776.858 192.255 795.234 167.699 803.437 115.742C804.449 109.332 805.498 102.638 806.51 96.2274"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeOut",
          delay: calc(4.6),
          opacity: { duration: 0.4, delay: calc(4.6) },
        }}
      />

      {/* a2, o */}
      <motion.path
        d="M806.51 96.2274C805.486 102.73 804.461 109.232 803.436 115.735C798.955 144.175 796.887 155.395 797.109 162.729C797.628 179.85 803.785 191.513 820.064 191.513C842.563 191.513 860.966 164.721 870.266 138.289C879.653 111.612 891.315 94.9867 915.633 94.9867C935.732 94.9867 951.613 109.875 951.613 137.915C951.613 168.932 931.489 192.257 906.059 192.505C883.681 192.753 868.983 174.639 870.471 147.344C872.208 117.071 890.571 94.9867 914.64 94.9867C928.536 94.9867 940.207 101.164 949.38 107.89C974.247 126.031 993.407 114.82 1000.74 96.8832"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1.5),
          ease: "easeOut",
          delay: calc(5.4),
          opacity: { duration: 0.75, delay: calc(5.4) },
        }}
      />

      {/* sign */}
      <motion.path
        className="stroke-yellow-400"
        d="M763.027 19.3039C768.734 34.6886 780.397 48.3362 792.059 55.5322"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          delay: calc(7),
          opacity: { duration: 0.4, delay: calc(7) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}

function AppleHelloEnglishEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 638 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="14.8883"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>hello</title>

      {/* h1 */}
      <motion.path
        d="M8.69214 166.553C36.2393 151.239 61.3409 131.548 89.8191 98.0295C109.203 75.1488 119.625 49.0228 120.122 31.0026C120.37 17.6036 113.836 7.43883 101.759 7.43883C88.3598 7.43883 79.9231 17.6036 74.7122 40.9363C69.005 66.5793 64.7866 96.0036 54.1166 190.356"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          opacity: { duration: 0.4 },
        }}
      />

      {/* h2, ello */}
      <motion.path
        d="M55.1624 181.135C60.6251 133.114 81.4118 98.0479 107.963 98.0479C123.844 98.0479 133.937 110.703 131.071 128.817C129.457 139.487 127.587 150.405 125.408 163.06C122.869 178.941 130.128 191.348 152.122 191.348C184.197 191.348 219.189 173.523 237.097 145.915C243.198 136.509 245.68 128.073 245.928 119.884C246.176 104.996 237.739 93.8296 222.851 93.8296C203.992 93.8296 189.6 115.17 189.6 142.465C189.6 171.745 205.481 192.341 239.208 192.341C285.066 192.341 335.86 137.292 359.199 75.8585C365.788 58.513 368.26 42.4065 368.26 31.1512C368.26 17.8057 364.042 7.55823 352.131 7.55823C340.469 7.55823 332.777 16.6141 325.829 30.9129C317.688 47.4967 311.667 71.4162 309.203 98.4549C303 166.301 316.896 191.348 349.936 191.348C390 191.348 434.542 135.534 457.286 75.6686C463.803 58.513 466.275 42.4065 466.275 31.1512C466.275 17.8057 462.057 7.55823 450.146 7.55823C438.484 7.55823 430.792 16.6141 423.844 30.9129C415.703 47.4967 409.682 71.4162 407.218 98.4549C401.015 166.301 414.911 191.348 444.416 191.348C473.874 191.348 489.877 165.67 499.471 138.402C508.955 111.447 520.618 94.8221 544.935 94.8221C565.035 94.8221 580.916 109.71 580.916 137.75C580.916 168.768 560.792 192.093 535.362 192.341C512.984 192.589 498.285 174.475 499.774 147.179C501.511 116.907 519.873 94.8221 543.943 94.8221C557.839 94.8221 569.51 100.999 578.682 107.725C603.549 125.866 622.709 114.656 630.047 96.7186"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(2.8),
          ease: "easeInOut",
          delay: calc(0.7),
          opacity: { duration: 0.7, delay: calc(0.7) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}

// Swahili "jambo" - cursive flowing style like Apple hello
function AppleHelloSwahiliEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 580 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="14.8883"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <title>jambo</title>

      {/* j - stem going down then curving, connected to rest */}
      <motion.path
        d="M45 8C45 8 45 95 45 95C45 95 45 145 45 160C45 185 20 195 5 185"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.6),
          ease: "easeInOut",
          opacity: { duration: 0.3 },
        }}
      />

      {/* ambo - all connected in one flowing cursive stroke */}
      <motion.path
        d="M45 95C65 95 95 95 110 95C130 95 145 110 145 135C145 160 130 175 110 175C90 175 75 165 75 145C75 125 90 110 110 110C130 110 145 125 150 145C150 165 150 190 150 190C160 130 175 95 195 95C215 95 230 115 235 145C235 175 235 190 235 190C245 130 260 95 280 95C300 95 315 115 320 145C320 175 320 190 320 190C320 145 320 30 320 10C320 10 320 95 320 95C340 95 365 110 365 145C365 175 345 190 320 190C350 190 380 175 395 145C410 115 425 95 455 95C485 95 510 120 510 150C510 180 485 195 455 195C425 195 405 175 410 145C415 115 440 95 470 95C490 95 520 105 540 125C565 150 575 140 575 125"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(2.5),
          ease: "easeInOut",
          delay: calc(0.5),
          opacity: { duration: 0.6, delay: calc(0.5) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}

// Hindi "Namaste" in cursive English
function AppleHelloHindiEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 638 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="14.8883"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <title>Namaste</title>

      {/* N */}
      <motion.path
        d="M10 190L10 30L70 190L70 30"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.6),
          ease: "easeInOut",
          opacity: { duration: 0.3 },
        }}
      />

      {/* a */}
      <motion.path
        d="M120 95C100 95 85 115 85 145C85 175 100 190 120 190C140 190 155 175 155 145C155 115 155 95 155 95L155 190"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.5),
          ease: "easeInOut",
          delay: calc(0.5),
          opacity: { duration: 0.25, delay: calc(0.5) },
        }}
      />

      {/* m */}
      <motion.path
        d="M175 190L175 95C195 95 210 110 210 140L210 190M210 95C230 95 245 110 245 140L245 190"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.6),
          ease: "easeInOut",
          delay: calc(0.9),
          opacity: { duration: 0.3, delay: calc(0.9) },
        }}
      />

      {/* a */}
      <motion.path
        d="M295 95C275 95 260 115 260 145C260 175 275 190 295 190C315 190 330 175 330 145C330 115 330 95 330 95L330 190"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.5),
          ease: "easeInOut",
          delay: calc(1.4),
          opacity: { duration: 0.25, delay: calc(1.4) },
        }}
      />

      {/* s */}
      <motion.path
        d="M390 110C390 100 375 95 360 95C345 95 335 105 335 120C335 135 350 145 365 150C380 155 390 165 390 180C390 195 375 200 360 195C345 190 335 180 335 170"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.5),
          ease: "easeInOut",
          delay: calc(1.8),
          opacity: { duration: 0.25, delay: calc(1.8) },
        }}
      />

      {/* t */}
      <motion.path
        d="M420 50L420 190M400 95L440 95"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeInOut",
          delay: calc(2.2),
          opacity: { duration: 0.2, delay: calc(2.2) },
        }}
      />

      {/* e */}
      <motion.path
        d="M460 145L510 145C510 120 495 95 480 95C460 95 450 115 450 145C450 175 465 195 485 195C500 195 515 185 520 170"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.5),
          ease: "easeInOut",
          delay: calc(2.5),
          opacity: { duration: 0.25, delay: calc(2.5) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}

// Punjabi "Sat Sri Akaal" in cursive English
function AppleHelloPunjabiEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="14.8883"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <title>Sat Sri Akaal</title>

      {/* S */}
      <motion.path
        d="M50 50C50 35 35 25 20 25C5 25 -5 40 -5 55C-5 70 10 80 25 90C40 100 55 115 55 135C55 160 40 175 20 175C0 175 -10 160 -10 145"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.45),
          ease: "easeInOut",
          opacity: { duration: 0.22 },
        }}
      />

      {/* a */}
      <motion.path
        d="M100 95C80 95 65 115 65 140C65 165 80 180 100 180C120 180 135 165 135 140L135 95L135 180"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeInOut",
          delay: calc(0.4),
          opacity: { duration: 0.2, delay: calc(0.4) },
        }}
      />

      {/* t */}
      <motion.path
        d="M165 50L165 180M145 95L185 95"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.35),
          ease: "easeInOut",
          delay: calc(0.75),
          opacity: { duration: 0.17, delay: calc(0.75) },
        }}
      />

      {/* S */}
      <motion.path
        d="M270 50C270 35 255 25 240 25C225 25 215 40 215 55C215 70 230 80 245 90C260 100 275 115 275 135C275 160 260 175 240 175C220 175 210 160 210 145"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.45),
          ease: "easeInOut",
          delay: calc(1.05),
          opacity: { duration: 0.22, delay: calc(1.05) },
        }}
      />

      {/* r */}
      <motion.path
        d="M300 180L300 95C320 95 335 105 335 120"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.3),
          ease: "easeInOut",
          delay: calc(1.45),
          opacity: { duration: 0.15, delay: calc(1.45) },
        }}
      />

      {/* i */}
      <motion.path
        d="M360 95L360 180M360 60L360 65"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.25),
          ease: "easeInOut",
          delay: calc(1.7),
          opacity: { duration: 0.12, delay: calc(1.7) },
        }}
      />

      {/* A */}
      <motion.path
        d="M410 180L440 30L470 180M420 130L460 130"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.45),
          ease: "easeInOut",
          delay: calc(1.9),
          opacity: { duration: 0.22, delay: calc(1.9) },
        }}
      />

      {/* k */}
      <motion.path
        d="M500 30L500 180M540 95L500 140L545 180"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeInOut",
          delay: calc(2.3),
          opacity: { duration: 0.2, delay: calc(2.3) },
        }}
      />

      {/* a */}
      <motion.path
        d="M600 95C580 95 565 115 565 140C565 165 580 180 600 180C620 180 635 165 635 140L635 95L635 180"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeInOut",
          delay: calc(2.65),
          opacity: { duration: 0.2, delay: calc(2.65) },
        }}
      />

      {/* a */}
      <motion.path
        d="M695 95C675 95 660 115 660 140C660 165 675 180 695 180C715 180 730 165 730 140L730 95L730 180"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeInOut",
          delay: calc(3),
          opacity: { duration: 0.2, delay: calc(3) },
        }}
      />

      {/* l */}
      <motion.path
        d="M765 30L765 180"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.3),
          ease: "easeInOut",
          delay: calc(3.35),
          opacity: { duration: 0.15, delay: calc(3.35) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}

export {
  AppleHelloEnglishEffect,
  AppleHelloVietnameseEffect,
  AppleHelloSwahiliEffect,
  AppleHelloHindiEffect,
  AppleHelloPunjabiEffect,
};
