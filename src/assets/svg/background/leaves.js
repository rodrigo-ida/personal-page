import { motion } from "framer-motion";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const allStars = [];


const starsGenerator = (quantity) => {
  const star = (i) => {
    const x = getRandomInt(0, 1400)
    const y = getRandomInt(0, -60)

    const leafVariant = {
      initial:{ x: x, y: y, scale: 0.005},
      animate: {
        y: 700,
        x: [x + 30, x -30,x + 30],
        transition: {
          repeat: Infinity,
          duration: getRandomInt(12, 16),
          delay: getRandomInt(3, 10),
          x: { repeat: Infinity, duration: 5 },
        },
      },
    };
    return (
//coral
        <motion.g 
        key={'leaves'+i}
        initial="initial"
        animate="animate"
        variants={leafVariant}
        className="folha" fill="darkOrange" stroke="none" >
          <path
            d="M2765 12713 c4 -47 13 -103 20 -122 7 -20 16 -61 19 -91 4 -30 14
-74 23 -97 8 -23 13 -48 10 -56 -4 -11 4 -69 43 -284 6 -34 5 -74 -1 -110 -15
-89 -20 -401 -7 -448 6 -22 12 -87 14 -145 2 -92 0 -108 -16 -125 -17 -18 -29
-68 -47 -182 -3 -18 2 -72 11 -121 15 -80 15 -92 1 -125 -8 -20 -15 -63 -15
-95 0 -35 -7 -73 -17 -92 -14 -29 -15 -46 -6 -124 5 -50 8 -121 7 -158 -3 -49
2 -85 18 -130 16 -49 21 -90 23 -183 2 -131 6 -155 40 -200 30 -39 80 -141 92
-185 7 -25 6 -44 -3 -65 -7 -16 -13 -61 -14 -100 0 -38 -7 -95 -16 -125 -25
-87 -27 -112 -9 -160 9 -25 23 -74 31 -110 7 -36 28 -105 45 -155 17 -49 37
-112 44 -140 19 -69 50 -150 86 -217 20 -38 28 -65 24 -81 -5 -18 3 -35 34
-72 23 -28 41 -55 41 -61 0 -6 9 -23 21 -38 12 -15 43 -77 69 -138 37 -84 61
-124 98 -162 67 -70 118 -136 127 -165 9 -29 73 -121 85 -121 4 0 15 -21 24
-47 20 -53 79 -173 106 -213 9 -14 30 -45 46 -69 16 -24 44 -66 62 -93 17 -26
32 -51 32 -54 0 -3 11 -20 24 -37 13 -18 27 -43 31 -57 4 -14 16 -36 27 -50
31 -41 68 -100 68 -110 0 -5 10 -25 23 -44 12 -19 37 -59 55 -89 20 -33 47
-62 68 -73 52 -28 53 -52 3 -125 -92 -136 -169 -234 -344 -438 -55 -64 -134
-156 -175 -206 -136 -165 -586 -617 -610 -612 -38 7 4 140 84 260 20 30 42 72
50 95 8 23 26 58 40 79 15 21 26 45 26 54 0 9 24 52 53 96 83 127 81 122 82
203 0 57 6 87 23 123 13 27 21 55 18 63 -7 17 11 169 30 254 20 92 22 148 8
168 -8 12 -14 68 -16 160 -3 141 -3 143 -30 165 -21 17 -32 42 -48 104 -11 45
-20 96 -20 115 0 18 -12 55 -26 82 -14 27 -35 74 -45 104 -11 31 -25 63 -33
71 -7 9 -18 42 -24 73 -6 31 -25 84 -42 117 -16 33 -37 81 -46 106 -8 25 -26
62 -39 81 -14 20 -29 52 -34 72 -6 19 -22 47 -35 61 -16 16 -37 64 -56 125
-17 55 -41 111 -56 129 -28 34 -98 169 -138 267 -15 36 -37 74 -50 85 -15 12
-34 52 -51 105 -18 57 -38 96 -60 120 -18 19 -48 60 -67 90 -39 62 -158 180
-181 180 -8 0 -46 34 -84 77 -38 43 -84 83 -106 93 -22 10 -83 65 -148 134
-114 119 -149 146 -193 146 -19 0 -29 9 -42 35 -9 20 -29 45 -45 56 -16 11
-37 35 -46 52 -9 18 -34 56 -56 85 -22 29 -47 65 -56 81 -9 15 -25 43 -36 62
-11 19 -83 97 -161 175 -78 78 -155 161 -172 185 -16 24 -38 51 -49 60 -28 24
-113 135 -156 203 -21 34 -42 63 -47 66 -4 3 -22 32 -39 65 -18 33 -38 71 -46
85 -7 14 -21 43 -30 65 -9 22 -22 51 -30 65 -7 14 -21 51 -30 83 -26 90 -36
78 -56 -63 -20 -139 -2 -325 41 -425 10 -24 23 -75 28 -113 6 -38 20 -88 32
-112 12 -24 24 -58 25 -76 2 -18 16 -71 31 -118 22 -69 24 -88 14 -100 -9 -12
-8 -28 8 -78 29 -91 32 -109 21 -129 -6 -12 -5 -43 3 -89 11 -62 10 -74 -5
-99 -20 -34 -22 -109 -6 -212 9 -60 8 -74 -5 -94 -20 -31 -20 -82 0 -165 9
-36 16 -81 15 -100 -1 -19 5 -64 12 -100 12 -56 12 -69 -1 -96 -12 -27 -12
-37 2 -90 29 -103 29 -104 11 -124 -16 -18 -17 -45 -12 -347 3 -191 10 -343
17 -363 12 -39 22 -113 21 -149 -1 -13 6 -43 14 -68 8 -24 15 -65 15 -90 0
-36 10 -67 41 -126 23 -44 42 -93 44 -111 1 -17 21 -78 43 -136 30 -76 41
-119 41 -155 -1 -30 10 -79 26 -125 15 -41 30 -91 34 -111 4 -20 18 -51 31
-68 30 -44 70 -156 70 -200 0 -20 10 -64 21 -96 12 -33 25 -85 29 -115 4 -30
18 -80 30 -110 12 -30 27 -73 32 -95 6 -22 15 -45 20 -52 5 -6 8 -31 7 -55 -3
-53 9 -76 75 -150 28 -32 72 -82 98 -110 25 -29 67 -82 93 -117 64 -87 136
-157 281 -273 66 -53 145 -125 175 -159 30 -35 73 -85 96 -111 24 -27 43 -52
43 -57 0 -4 34 -43 75 -87 42 -43 83 -92 92 -109 8 -16 26 -37 39 -47 12 -10
26 -27 29 -38 14 -43 -121 -350 -343 -780 -294 -572 -430 -807 -488 -847 -15
-10 -41 -33 -59 -52 -27 -28 -34 -44 -39 -96 -10 -95 -38 -174 -219 -600 -216
-512 -528 -1051 -971 -1680 -51 -71 -119 -175 -152 -229 -79 -133 -166 -221
-266 -270 l-78 -38 0 -144 0 -144 150 0 c121 0 150 3 150 14 0 7 6 19 14 25 8
7 31 48 52 91 20 43 43 81 50 84 8 3 14 13 14 22 0 17 68 145 82 155 10 7 28
39 94 169 26 52 57 109 70 125 12 17 38 64 57 107 20 42 40 78 45 80 5 1 19
23 30 48 12 25 33 63 47 85 13 22 28 47 31 55 30 73 60 129 80 151 19 20 23
33 19 52 -5 18 -2 28 12 35 13 8 18 22 18 54 0 37 3 43 21 43 28 1 54 23 54
46 0 10 13 33 28 51 16 18 34 52 41 76 6 23 18 42 25 42 15 0 26 21 26 47 0 9
11 30 24 47 13 17 27 46 30 64 4 17 13 35 21 39 7 5 20 24 29 43 9 19 40 80
70 135 30 55 62 123 72 150 9 28 25 61 35 74 11 13 19 28 19 33 0 5 15 41 34
81 50 106 92 199 148 322 89 196 139 293 153 299 26 10 44 51 56 126 7 46 24
100 44 140 147 291 254 509 260 530 18 57 192 414 295 605 39 72 74 140 80
152 5 11 13 24 18 27 5 3 34 46 63 96 67 114 87 125 208 117 142 -9 287 -41
396 -87 55 -24 105 -46 110 -50 6 -4 37 -17 70 -29 93 -35 288 -139 310 -167
18 -22 38 -28 170 -50 163 -27 166 -27 710 -5 369 15 564 44 645 96 27 17 68
40 92 49 24 10 71 31 104 47 34 16 64 29 68 29 16 0 194 75 217 92 15 11 61
24 115 32 49 8 130 28 179 46 50 17 105 37 123 43 18 6 48 26 68 45 38 37 147
90 234 115 46 13 57 21 67 46 12 32 54 56 178 102 33 12 71 33 86 46 14 12 29
23 33 23 5 0 24 13 42 30 19 16 53 34 76 40 72 18 98 32 119 61 11 16 27 29
35 29 9 0 30 11 47 24 18 13 59 36 92 51 33 14 96 44 140 65 160 77 282 129
354 150 41 12 84 28 96 36 12 8 73 26 135 40 115 26 152 38 345 116 113 46
155 68 155 80 0 4 -46 9 -102 11 -153 6 -330 25 -364 37 -19 7 -65 9 -134 5
-87 -6 -112 -4 -145 10 -23 10 -77 20 -130 22 -54 3 -99 11 -113 20 -13 8 -51
19 -85 24 -34 6 -68 15 -75 22 -10 8 -47 10 -111 8 -53 -2 -123 -4 -156 -5
-93 -1 -343 24 -410 41 -33 8 -98 19 -145 24 -46 6 -91 16 -100 24 -9 8 -51
30 -95 50 -44 20 -90 46 -102 57 -24 22 -142 68 -177 68 -12 0 -37 11 -56 25
-19 14 -41 25 -51 25 -9 0 -44 9 -78 20 -35 11 -99 23 -144 26 -45 4 -87 11
-94 16 -7 6 -32 5 -66 -1 -52 -9 -263 -6 -299 5 -9 3 -48 -5 -85 -17 -45 -14
-92 -21 -138 -20 -38 0 -99 -5 -135 -11 -36 -6 -96 -11 -135 -12 -63 -1 -81
-7 -180 -55 -151 -74 -235 -111 -249 -111 -7 0 -39 -23 -72 -51 -74 -65 -116
-84 -147 -67 -12 7 -47 12 -77 13 -53 0 -55 1 -58 28 -3 20 4 34 27 53 17 14
31 31 31 37 0 7 16 28 35 47 19 19 35 40 35 47 0 6 6 16 13 20 6 4 24 24 39
44 15 20 43 52 63 70 19 18 35 38 35 45 0 17 64 71 105 89 43 17 119 19 248 5
51 -5 182 -14 292 -20 110 -6 227 -15 260 -20 33 -6 197 -14 365 -19 205 -6
333 -15 390 -26 133 -25 492 -31 671 -11 l144 16 145 73 c79 39 156 84 170 99
19 20 50 33 127 52 56 14 114 26 130 26 16 0 37 6 48 13 24 16 205 87 222 87
7 0 22 11 35 24 22 23 181 86 218 86 10 0 24 10 33 23 8 13 53 42 100 66 47
24 97 56 111 71 14 16 58 44 99 64 42 19 77 40 79 46 1 5 52 30 112 54 81 33
116 53 136 78 19 23 48 41 95 57 46 16 69 30 75 45 11 29 71 69 153 101 37 15
72 35 77 45 5 10 43 38 84 64 40 25 81 57 90 71 9 14 39 36 66 50 27 14 54 33
59 43 5 10 22 24 38 32 15 8 58 43 95 77 36 35 74 63 83 63 10 0 32 9 50 20
17 11 58 28 91 39 71 23 167 63 186 78 7 5 45 20 83 32 39 13 81 30 95 40 14
10 48 23 75 31 28 7 66 21 85 31 19 11 62 26 95 34 172 43 237 63 298 90 36
17 67 33 67 36 0 18 -56 24 -285 31 -137 4 -280 7 -316 7 -37 0 -82 6 -102 15
-20 8 -58 18 -84 21 -26 4 -63 13 -81 22 -24 11 -50 13 -90 8 -41 -5 -71 -2
-104 9 -32 12 -63 14 -101 10 -41 -5 -61 -2 -88 12 -29 15 -61 18 -214 19
-146 1 -187 5 -218 19 -34 15 -55 16 -212 5 -169 -10 -176 -10 -218 10 -30 15
-63 21 -108 21 -40 0 -75 6 -94 16 -43 24 -342 23 -479 -1 -93 -16 -101 -16
-136 0 -36 16 -41 16 -133 -9 -52 -14 -108 -26 -123 -26 -16 0 -58 -9 -94 -20
-35 -12 -76 -18 -90 -15 -28 6 -180 -34 -245 -65 -53 -25 -142 -57 -181 -65
-38 -7 -198 -97 -234 -130 -14 -13 -52 -36 -85 -52 -67 -32 -119 -66 -203
-133 -32 -25 -73 -57 -92 -70 -19 -13 -66 -51 -105 -85 -38 -34 -106 -89 -150
-123 -44 -34 -101 -79 -127 -100 -26 -20 -74 -56 -105 -80 -32 -24 -80 -61
-108 -83 -27 -22 -88 -58 -135 -81 -99 -47 -256 -157 -320 -223 -83 -86 -209
-187 -228 -181 -9 3 -26 -3 -37 -12 -35 -29 -110 -126 -124 -160 -7 -17 -17
-32 -21 -32 -5 0 -22 -11 -38 -24 -27 -24 -102 -56 -129 -56 -7 0 -13 11 -13
25 0 14 4 25 8 25 5 0 29 42 55 94 25 52 54 100 64 108 10 7 25 25 33 40 30
54 168 202 265 287 144 124 265 220 317 250 25 14 133 85 241 156 107 72 222
145 255 164 33 18 93 58 134 88 119 90 266 183 408 260 25 13 56 35 70 47 14
13 44 36 68 50 51 32 54 35 162 165 47 57 112 133 146 169 72 79 99 118 107
153 5 17 57 67 161 154 105 86 172 150 206 196 28 37 61 77 75 87 40 31 130
145 141 177 5 16 25 39 44 52 70 45 80 54 80 76 0 22 13 42 113 182 49 68 54
84 37 101 -7 7 1 40 26 105 26 67 37 113 39 159 1 39 10 84 23 112 29 65 35
108 22 142 -8 23 -7 47 6 109 14 64 15 85 5 112 -12 34 -5 91 20 151 7 16 13
56 15 89 1 33 5 103 9 156 5 65 4 107 -4 131 -10 29 -9 43 3 74 9 22 25 86 37
144 12 58 30 121 40 142 10 20 21 56 25 80 8 58 33 147 51 181 8 15 16 44 19
63 4 34 40 94 55 94 5 0 15 22 23 49 8 27 21 62 30 79 9 17 16 44 16 59 0 15
8 40 18 54 70 105 82 126 82 146 0 25 51 133 100 209 26 42 39 84 25 84 -8 0
-119 -64 -164 -95 -25 -16 -81 -64 -125 -105 -104 -97 -165 -146 -193 -154
-12 -4 -32 -20 -43 -37 -12 -16 -40 -40 -64 -54 -23 -13 -53 -36 -67 -51 -13
-14 -42 -35 -64 -46 -22 -11 -57 -36 -78 -54 -25 -23 -47 -34 -68 -34 -40 0
-76 -20 -119 -65 -19 -20 -57 -48 -85 -61 -79 -38 -123 -68 -173 -116 -26 -25
-74 -60 -107 -78 -33 -19 -79 -46 -102 -62 -23 -15 -52 -28 -66 -28 -33 0
-107 -55 -161 -121 -31 -38 -60 -62 -89 -73 -23 -9 -59 -32 -80 -51 -43 -39
-132 -85 -166 -85 -14 0 -43 -20 -73 -50 -36 -36 -58 -50 -78 -50 -32 0 -61
-29 -112 -115 -20 -33 -43 -58 -59 -64 -14 -5 -43 -32 -63 -60 -21 -28 -42
-51 -48 -51 -5 0 -36 -24 -69 -52 -48 -43 -68 -71 -104 -145 -27 -56 -51 -93
-60 -93 -22 0 -49 -49 -85 -154 -18 -49 -43 -103 -56 -119 -13 -15 -28 -45
-33 -65 -12 -44 -66 -132 -81 -132 -18 0 -37 -59 -54 -165 -15 -94 -35 -162
-70 -230 -8 -16 -22 -86 -30 -155 -22 -175 -23 -188 -31 -345 -4 -77 -13 -162
-20 -190 -15 -57 -32 -176 -40 -285 -9 -114 -35 -311 -45 -345 -5 -16 -10 -55
-11 -85 -1 -30 -10 -86 -20 -125 -10 -38 -21 -95 -24 -125 -4 -30 -15 -82 -25
-115 -10 -33 -21 -73 -25 -90 -7 -32 -25 -76 -56 -140 -10 -22 -19 -49 -19
-60 0 -11 -11 -42 -25 -70 -13 -27 -25 -53 -25 -58 0 -16 -106 -176 -163 -247
-125 -156 -154 -176 -177 -120 -14 35 -7 87 20 145 11 22 33 90 51 150 17 61
40 127 50 147 11 21 39 116 64 212 31 120 59 204 91 272 34 72 48 114 51 154
7 105 2 474 -6 489 -5 9 -25 72 -45 140 -48 160 -60 184 -92 178 -13 -2 -29 2
-35 9 -10 13 -4 40 57 249 8 28 21 104 28 170 14 120 14 120 -16 255 -16 74
-35 142 -43 150 -7 8 -20 31 -30 50 -9 19 -26 42 -37 51 -15 11 -22 32 -26 70
-2 30 -10 61 -17 69 -7 8 -20 31 -29 50 -54 120 -172 297 -243 367 -29 29 -53
58 -53 65 0 18 -37 123 -57 163 -8 16 -27 46 -42 65 -14 19 -37 56 -51 82 -14
26 -47 71 -73 100 -26 30 -62 78 -80 108 -18 30 -44 61 -58 67 -18 9 -34 33
-53 82 -28 71 -73 143 -110 172 -11 9 -34 45 -51 80 -21 46 -36 65 -51 67 -13
2 -38 27 -64 63 -23 32 -48 59 -57 59 -21 0 -80 65 -108 121 -27 53 -47 71
-71 67 -12 -2 -27 14 -51 54 -18 32 -49 70 -69 84 -20 15 -49 53 -65 85 -15
32 -33 60 -39 64 -6 4 -22 30 -36 58 -15 29 -45 72 -68 97 -57 61 -255 385
-256 418 0 6 -7 12 -16 12 -14 0 -15 -11 -9 -87z"
          />
        </motion.g>

    );
  };

  for (let i = 0; i < quantity; i++) {
    allStars.push(star(i));
  }

  return allStars;
};

const stars = starsGenerator(15);

const leaveGroupStyle = {

  transform: 'translate(20px, -375px)'
}

const Stars = () => (
  <motion.g 
  style={leaveGroupStyle}
  className="leaves_group" >
    {stars}
  </motion.g>
);

export default Stars;
