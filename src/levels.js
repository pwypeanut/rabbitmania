var trackSelected = "fireflies"

var pokemon = {
	"title": "Pokemon Theme Song",
	"audioPath": "ogg/pokemon.ogg",
  "offset": 0.1,
  "timePerBeat": 0.41379310344,
  "unitsPerBeat": 2,
  "totalBeats": 152,
  "notes": [{'duration': 7, 'unitStart': 2, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 2, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 4, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 6, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 8, 'type': 'tap', 'side': 'right'}, {'duration': 7, 'unitStart': 10, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 10, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 12, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 14, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 16, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 18, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 20, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 22, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 24, 'type': 'tap', 'side': 'left'}, {'duration': 7, 'unitStart': 18, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 26, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 28, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 30, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 32, 'type': 'tap', 'side': 'left'}, {'duration': 7, 'unitStart': 26, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 35, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 41, 'type': 'tap', 'side': 'left'}, {'duration': 1, 'unitStart': 36, 'type': 'hold', 'side': 'right'}, {'duration': 1, 'unitStart': 38, 'type': 'hold', 'side': 'right'}, {'duration': 4, 'unitStart': 42, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 49, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 45, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 52, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 54, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 50, 'type': 'tap', 'side': 'right'}, {'duration': 1, 'unitStart': 56, 'type': 'hold', 'side': 'right'}, {'duration': 1, 'unitStart': 61, 'type': 'hold', 'side': 'left'}, {'duration': 1, 'unitStart': 63, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 65, 'type': 'tap', 'side': 'left'}, {'duration': 1, 'unitStart': 61, 'type': 'hold', 'side': 'right'}, {'duration': 1, 'unitStart': 63, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 67, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 72, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 66, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 68, 'type': 'tap', 'side': 'right'}, {'duration': 1, 'unitStart': 70, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 73, 'type': 'tap', 'side': 'right'}, {'duration': 1, 'unitStart': 75, 'type': 'hold', 'side': 'left'}, {'duration': 1, 'unitStart': 77, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 81, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 84, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 88, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 82, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 85, 'type': 'tap', 'side': 'right'}, {'duration': 4, 'unitStart': 89, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 94, 'type': 'swipe', 'side': 'right'}, {'duration': 0, 'unitStart': 96, 'type': 'swipe', 'side': 'left'}, {'duration': 0, 'unitStart': 98, 'type': 'swipe', 'side': 'right'}, {'duration': 0, 'unitStart': 100, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 102, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 105, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 101, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 103, 'type': 'tap', 'side': 'right'}, {'duration': 1, 'unitStart': 106, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 108, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 109, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 114, 'type': 'tap', 'side': 'left'}, {'duration': 1, 'unitStart': 118, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 120, 'type': 'tap', 'side': 'left'}, {'duration': 1, 'unitStart': 115, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 121, 'type': 'tap', 'side': 'right'}, {'duration': 2, 'unitStart': 125, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 127, 'type': 'swipe', 'side': 'right'}, {'duration': 0, 'unitStart': 129, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 131, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 133, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 137, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 130, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 132, 'type': 'tap', 'side': 'right'}, {'duration': 1, 'unitStart': 134, 'type': 'hold', 'side': 'right'}, {'duration': 1, 'unitStart': 138, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 145, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 140, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 142, 'type': 'swipe', 'side': 'left'}, {'duration': 1, 'unitStart': 146, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 151, 'type': 'tap', 'side': 'left'}, {'duration': 4, 'unitStart': 152, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 149, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 151, 'type': 'tap', 'side': 'right'}, {'duration': 4, 'unitStart': 152, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 159, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 161, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 160, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 164, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 165, 'type': 'tap', 'side': 'left'}, {'duration': 2, 'unitStart': 169, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 166, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 167, 'type': 'swipe', 'side': 'right'}, {'duration': 2, 'unitStart': 169, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 172, 'type': 'swipe', 'side': 'right'}, {'duration': 0, 'unitStart': 174, 'type': 'swipe', 'side': 'left'}, {'duration': 0, 'unitStart': 176, 'type': 'swipe', 'side': 'right'}, {'duration': 0, 'unitStart': 181, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 183, 'type': 'tap', 'side': 'left'}, {'duration': 1, 'unitStart': 185, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 182, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 184, 'type': 'tap', 'side': 'right'}, {'duration': 1, 'unitStart': 187, 'type': 'hold', 'side': 'left'}, {'duration': 1, 'unitStart': 189, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 191, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 193, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 192, 'type': 'tap', 'side': 'right'}, {'duration': 1, 'unitStart': 196, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 198, 'type': 'swipe', 'side': 'right'}, {'duration': 0, 'unitStart': 200, 'type': 'swipe', 'side': 'left'}, {'duration': 0, 'unitStart': 201, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 202, 'type': 'tap', 'side': 'left'}, {'duration': 2, 'unitStart': 203, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 205, 'type': 'swipe', 'side': 'right'}, {'duration': 0, 'unitStart': 208, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 209, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 210, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 212, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 215, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 210, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 213, 'type': 'tap', 'side': 'right'}, {'duration': 4, 'unitStart': 216, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 223, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 225, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 224, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 228, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 229, 'type': 'tap', 'side': 'left'}, {'duration': 2, 'unitStart': 233, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 230, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 231, 'type': 'swipe', 'side': 'right'}, {'duration': 2, 'unitStart': 233, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 236, 'type': 'swipe', 'side': 'right'}, {'duration': 0, 'unitStart': 238, 'type': 'swipe', 'side': 'left'}, {'duration': 0, 'unitStart': 240, 'type': 'swipe', 'side': 'right'}, {'duration': 0, 'unitStart': 245, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 247, 'type': 'tap', 'side': 'left'}, {'duration': 1, 'unitStart': 249, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 246, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 248, 'type': 'tap', 'side': 'right'}, {'duration': 1, 'unitStart': 251, 'type': 'hold', 'side': 'left'}, {'duration': 4, 'unitStart': 253, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 258, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 259, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 263, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 265, 'type': 'tap', 'side': 'left'}, {'duration': 1, 'unitStart': 261, 'type': 'hold', 'side': 'right'}, {'duration': 1, 'unitStart': 267, 'type': 'hold', 'side': 'left'}, {'duration': 4, 'unitStart': 269, 'type': 'hold', 'side': 'right'}, {'duration': 2, 'unitStart': 275, 'type': 'hold', 'side': 'left'}, {'duration': 2, 'unitStart': 280, 'type': 'hold', 'side': 'left'}, {'duration': 2, 'unitStart': 277, 'type': 'hold', 'side': 'right'}, {'duration': 2, 'unitStart': 280, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 284, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 286, 'type': 'tap', 'side': 'left'}, {'duration': 1, 'unitStart': 289, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 285, 'type': 'tap', 'side': 'right'}, {'duration': 1, 'unitStart': 287, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 292, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 294, 'type': 'tap', 'side': 'left'}, {'duration': 4, 'unitStart': 297, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 293, 'type': 'tap', 'side': 'right'}, {'duration': 1, 'unitStart': 295, 'type': 'hold', 'side': 'right'}, {'duration': 4, 'unitStart': 297, 'type': 'hold', 'side': 'right'}]
};

var mozart = {
  "title": "A Little Serenade",
  "audioPath": "ogg/mozart.ogg",
  "offset": 0.1,
  "timePerBeat": 0.41958041958,
  "unitsPerBeat": 1,
  "totalBeats": 170,
  "notes": [{'duration': 1, 'unitStart': 2, 'type': 'hold', 'side': 'left'}, {'duration': 1, 'unitStart': 4, 'type': 'hold', 'side': 'left'}, {'duration': 1, 'unitStart': 2, 'type': 'hold', 'side': 'right'}, {'duration': 1, 'unitStart': 4, 'type': 'hold', 'side': 'right'}, {'duration': 1, 'unitStart': 6, 'type': 'hold', 'side': 'left'}, {'duration': 1, 'unitStart': 8, 'type': 'hold', 'side': 'left'}, {'duration': 1, 'unitStart': 7, 'type': 'hold', 'side': 'right'}, {'duration': 1, 'unitStart': 10, 'type': 'hold', 'side': 'left'}, {'duration': 1, 'unitStart': 12, 'type': 'hold', 'side': 'left'}, {'duration': 1, 'unitStart': 10, 'type': 'hold', 'side': 'right'}, {'duration': 1, 'unitStart': 12, 'type': 'hold', 'side': 'right'}, {'duration': 1, 'unitStart': 15, 'type': 'hold', 'side': 'left'}, {'duration': 1, 'unitStart': 14, 'type': 'hold', 'side': 'right'}, {'duration': 1, 'unitStart': 16, 'type': 'hold', 'side': 'right'}, {'duration': 3, 'unitStart': 18, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 18, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 20, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 22, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 24, 'type': 'tap', 'side': 'left'}, {'duration': 3, 'unitStart': 22, 'type': 'hold', 'side': 'right'}, {'duration': 3, 'unitStart': 26, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 26, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 28, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 30, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 32, 'type': 'tap', 'side': 'left'}, {'duration': 3, 'unitStart': 30, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 34, 'type': 'tap', 'side': 'left'}, {'duration': 1, 'unitStart': 36, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 35, 'type': 'tap', 'side': 'right'}, {'duration': 1, 'unitStart': 36, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 39, 'type': 'tap', 'side': 'left'}, {'duration': 1, 'unitStart': 40, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 38, 'type': 'tap', 'side': 'right'}, {'duration': 1, 'unitStart': 40, 'type': 'hold', 'side': 'right'}, {'duration': 1, 'unitStart': 42, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 44, 'type': 'swipe', 'side': 'right'}, {'duration': 1, 'unitStart': 46, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 48, 'type': 'swipe', 'side': 'left'}, {'duration': 1, 'unitStart': 50, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 52, 'type': 'swipe', 'side': 'right'}, {'duration': 1, 'unitStart': 54, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 56, 'type': 'swipe', 'side': 'left'}, {'duration': 0, 'unitStart': 58, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 60, 'type': 'tap', 'side': 'right'}, {'duration': 2, 'unitStart': 62, 'type': 'hold', 'side': 'left'}, {'duration': 2, 'unitStart': 64, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 66, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 68, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 70, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 72, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 74, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 76, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 78, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 80, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 82, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 84, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 82, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 86, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 86, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 88, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 90, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 92, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 91, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 93, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 94, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 96, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 94, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 96, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 99, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 98, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 100, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 102, 'type': 'swipe', 'side': 'right'}, {'duration': 0, 'unitStart': 104, 'type': 'swipe', 'side': 'left'}, {'duration': 0, 'unitStart': 106, 'type': 'swipe', 'side': 'right'}, {'duration': 0, 'unitStart': 108, 'type': 'swipe', 'side': 'left'}, {'duration': 0, 'unitStart': 112, 'type': 'tap', 'side': 'left'}, {'duration': 3, 'unitStart': 110, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 114, 'type': 'tap', 'side': 'left'}, {'duration': 3, 'unitStart': 118, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 120, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 122, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 126, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 126, 'type': 'tap', 'side': 'right'}, {'duration': 3, 'unitStart': 130, 'type': 'hold', 'side': 'left'}, {'duration': 3, 'unitStart': 130, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 134, 'type': 'tap', 'side': 'left'}, {'duration': 3, 'unitStart': 136, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 138, 'type': 'tap', 'side': 'left'}, {'duration': 1, 'unitStart': 140, 'type': 'hold', 'side': 'right'}, {'duration': 3, 'unitStart': 144, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 142, 'type': 'tap', 'side': 'right'}, {'duration': 2, 'unitStart': 148, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 146, 'type': 'tap', 'side': 'right'}, {'duration': 1, 'unitStart': 150, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 152, 'type': 'swipe', 'side': 'right'}, {'duration': 1, 'unitStart': 154, 'type': 'hold', 'side': 'right'}, {'duration': 0, 'unitStart': 156, 'type': 'swipe', 'side': 'left'}, {'duration': 0, 'unitStart': 158, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 160, 'type': 'tap', 'side': 'left'}, {'duration': 0, 'unitStart': 159, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 161, 'type': 'tap', 'side': 'right'}, {'duration': 0, 'unitStart': 162, 'type': 'tap', 'side': 'left'}, {'duration': 1, 'unitStart': 164, 'type': 'hold', 'side': 'left'}, {'duration': 0, 'unitStart': 163, 'type': 'tap', 'side': 'right'}]
}

var fireflies = {
  "title": "Fireflies [Easy]",
  "audioPath": "ogg/fireflies.ogg",
  "offset": 1.432,
  "timePerBeat": 60 / 90,
  "unitsPerBeat": 1,
  "totalBeats": 168,
  "notes": [
    {"duration":0,"unitStart":4,"type":"tap","side":"right"},
    {"duration":0,"unitStart":8,"type":"tap","side":"right"},
    {"duration":0,"unitStart":12,"type":"tap","side":"left"},
    {"duration":0,"unitStart":16,"type":"tap","side":"left"},

    {"duration":2,"unitStart":20,"type":"hold","side":"right"},
    {"duration":2,"unitStart":24,"type":"hold","side":"left"},
    {"duration":4,"unitStart":28,"type":"hold","side":"right"},
    {"duration":4,"unitStart":32,"type":"hold","side":"left"},

    {"duration":0,"unitStart":36,"type":"swipe","side":"right"},
    {"duration":0,"unitStart":38,"type":"tap","side":"right"},
    // {"duration":1,"unitStart":39,"type":"hold","side":"right"},

    {"duration":0,"unitStart":40,"type":"swipe","side":"left"},
    {"duration":0,"unitStart":42,"type":"tap","side":"left"},
    // {"duration":1,"unitStart":43,"type":"hold","side":"left"},

    {"duration":0,"unitStart":44,"type":"swipe","side":"right"},
    {"duration":0,"unitStart":46,"type":"tap","side":"right"},
    // {"duration":1,"unitStart":47,"type":"hold","side":"right"},

    {"duration":0,"unitStart":48,"type":"swipe","side":"left"},
    {"duration":0,"unitStart":50,"type":"tap","side":"left"},
    // {"duration":1,"unitStart":51,"type":"hold","side":"left"},

    {"duration":0,"unitStart":52,"type":"swipe","side":"right"},
    {"duration":0,"unitStart":54,"type":"tap","side":"left"},
    // {"duration":1,"unitStart":55,"type":"hold","side":"right"},

    {"duration":0,"unitStart":56,"type":"swipe","side":"left"},
    {"duration":0,"unitStart":58,"type":"tap","side":"right"},
    // {"duration":1,"unitStart":59,"type":"hold","side":"left"},

    {"duration":0,"unitStart":60,"type":"swipe","side":"right"},
    {"duration":0,"unitStart":62,"type":"tap","side":"left"},
    // {"duration":1,"unitStart":63,"type":"hold","side":"right"},

    {"duration":0,"unitStart":67,"type":"tap","side":"left"},
    {"duration":0,"unitStart":67,"type":"tap","side":"right"},
    
    {"duration":8,"unitStart":68,"type":"hold","side":"left"},
    // {"duration":0,"unitStart":70,"type":"tap","side":"right"},
    {"duration":2,"unitStart":72,"type":"hold","side":"right"},

    {"duration":8,"unitStart":76,"type":"hold","side":"right"},
    // {"duration":0,"unitStart":78,"type":"tap","side":"left"},
    {"duration":2,"unitStart":80,"type":"hold","side":"left"},

    {"duration":4,"unitStart":84,"type":"hold","side":"left"},
    // {"duration":0,"unitStart":86,"type":"tap","side":"right"},
    {"duration":1,"unitStart":86,"type":"hold","side":"right"},

    {"duration":4,"unitStart":88,"type":"hold","side":"right"},
    // {"duration":0,"unitStart":89,"type":"tap","side":"left"},
    {"duration":1,"unitStart":90,"type":"hold","side":"left"},

    {"duration":2,"unitStart":92,"type":"hold","side":"left"},
    // {"duration":0,"unitStart":93,"type":"tap","side":"right"},
    {"duration":2,"unitStart":94,"type":"hold","side":"right"},
    // {"duration":0,"unitStart":95,"type":"tap","side":"left"},
    {"duration":4,"unitStart":96,"type":"hold","side":"left"},
    {"duration":0,"unitStart":100,"type":"swipe","side":"right"},

    {"duration":2,"unitStart":102,"type":"hold","side":"right"},
    {"duration":0,"unitStart":104,"type":"swipe","side":"left"},

    {"duration":2,"unitStart":106,"type":"hold","side":"left"},
    {"duration":0,"unitStart":108,"type":"swipe","side":"right"},

    {"duration":2,"unitStart":110,"type":"hold","side":"right"},
    {"duration":0,"unitStart":112,"type":"swipe","side":"left"},

    {"duration":2,"unitStart":114,"type":"hold","side":"left"},
    {"duration":0,"unitStart":116,"type":"swipe","side":"right"},

    {"duration":2,"unitStart":118,"type":"hold","side":"right"},
    {"duration":1,"unitStart":119,"type":"hold","side":"left"},
    {"duration":0,"unitStart":120,"type":"swipe","side":"left"},

    {"duration":2,"unitStart":122,"type":"hold","side":"left"},
    {"duration":1,"unitStart":123,"type":"hold","side":"right"},
    {"duration":0,"unitStart":124,"type":"swipe","side":"right"},

    {"duration":2,"unitStart":126,"type":"hold","side":"right"},
    {"duration":1,"unitStart":127,"type":"hold","side":"left"},
    {"duration":0,"unitStart":128,"type":"swipe","side":"left"},

    {"duration":0,"unitStart":130,"type":"tap","side":"left"},
    {"duration":0,"unitStart":130,"type":"tap","side":"right"},

    {"duration":2,"unitStart":132,"type":"hold","side":"right"},
    {"duration":2,"unitStart":134,"type":"hold","side":"left"},
    {"duration":4,"unitStart":136,"type":"hold","side":"right"},
    {"duration":0,"unitStart":138,"type":"tap","side":"left"},

    {"duration":2,"unitStart":140,"type":"hold","side":"left"},
    {"duration":2,"unitStart":142,"type":"hold","side":"right"},
    {"duration":4,"unitStart":144,"type":"hold","side":"left"},
    {"duration":0,"unitStart":146,"type":"tap","side":"right"},
    {"duration":0,"unitStart":147,"type":"tap","side":"right"},

    {"duration":4,"unitStart":148,"type":"hold","side":"right"},
    {"duration":0,"unitStart":150,"type":"tap","side":"left"},
    {"duration":2,"unitStart":152,"type":"hold","side":"right"},
    {"duration":0,"unitStart":154,"type":"tap","side":"left"},

    {"duration":8,"unitStart":156,"type":"hold","side":"left"},
    {"duration":0,"unitStart":158,"type":"tap","side":"right"},
    {"duration":4,"unitStart":160,"type":"hold","side":"right"},

    {"duration":0,"unitStart":164,"type":"swipe","side":"right"}
  ]
}

var kill_the_beat = {
  "title": "Kill The Beat [Hard]",
  "offset": 0.21,
  "timePerBeat": 60 / 120,
  "unitsPerBeat": 1,
  "totalBeats": 184,
  "audioPath": "ogg/killthebeat.ogg",
  "notes": [
    {"duration":1,"unitStart":4,"type":"hold","side":"left"},
    {"duration":1,"unitStart":6,"type":"hold","side":"left"},
    {"duration":0,"unitStart":7,"type":"swipe", "side":"right"},

    {"duration":1,"unitStart":8,"type":"hold","side":"right"},
    {"duration":1,"unitStart":10,"type":"hold","side":"right"},
    {"duration":0,"unitStart":11,"type":"swipe", "side":"left"},

    {"duration":1,"unitStart":12,"type":"hold","side":"left"},
    {"duration":1,"unitStart":14,"type":"hold","side":"left"},
    {"duration":0,"unitStart":15,"type":"swipe", "side":"right"},

    {"duration":1,"unitStart":16,"type":"hold","side":"right"},
    {"duration":0,"unitStart":17,"type":"swipe", "side":"left"},
    {"duration":1,"unitStart":18,"type":"hold","side":"left"},
    {"duration":0,"unitStart":19,"type":"swipe", "side":"right"},

    {"duration":1,"unitStart":20,"type":"hold","side":"right"},
    {"duration":1,"unitStart":22,"type":"hold","side":"left"},
    {"duration":0,"unitStart":23,"type":"swipe", "side":"right"},

    {"duration":1,"unitStart":24,"type":"hold","side":"left"},
    {"duration":1,"unitStart":26,"type":"hold","side":"right"},
    {"duration":0,"unitStart":27,"type":"swipe", "side":"left"},
    
    {"duration":1,"unitStart":28,"type":"hold","side":"right"},
    {"duration":1,"unitStart":30,"type":"hold","side":"left"},
    {"duration":0,"unitStart":31,"type":"swipe", "side":"right"},

    {"duration":0,"unitStart":32,"type":"swipe", "side":"left"},
    {"duration":0,"unitStart":32.75,"type":"swipe", "side":"right"},
    {"duration":0,"unitStart":33.5,"type":"swipe", "side":"left"},
    {"duration":0,"unitStart":34.25,"type":"swipe", "side":"right"},
    {"duration":0,"unitStart":35,"type":"swipe", "side":"left"},

    {"duration":1,"unitStart":36,"type":"hold","side":"left"},
    {"duration":0,"unitStart":37,"type":"tap","side":"right"},
    {"duration":1,"unitStart":38,"type":"hold","side":"left"},
    {"duration":0,"unitStart":39,"type":"tap","side":"right"},

    {"duration":1,"unitStart":40,"type":"hold","side":"right"},
    {"duration":0,"unitStart":41,"type":"tap","side":"left"},
    {"duration":1,"unitStart":42,"type":"hold","side":"right"},
    {"duration":0,"unitStart":43,"type":"tap","side":"left"},

    {"duration":1,"unitStart":44,"type":"hold","side":"left"},
    {"duration":0,"unitStart":45,"type":"swipe","side":"right"},
    {"duration":1,"unitStart":46,"type":"hold","side":"right"},
    {"duration":0,"unitStart":47,"type":"swipe","side":"left"},

    {"duration":0,"unitStart":48,"type":"swipe","side":"right"},
    {"duration":0,"unitStart":49,"type":"swipe","side":"left"},
    {"duration":0,"unitStart":50,"type":"swipe","side":"right"},
    {"duration":0,"unitStart":51,"type":"tap","side":"left"},
    {"duration":0,"unitStart":51,"type":"tap","side":"right"},

    {"duration":1.5,"unitStart":52,"type":"hold","side":"right"},
    {"duration":1.5,"unitStart":53.5,"type":"hold","side":"left"},
    {"duration":1,"unitStart":55,"type":"hold","side":"right"},
    {"duration":1.5,"unitStart":56,"type":"hold","side":"left"},
    {"duration":1.5,"unitStart":57.5,"type":"hold","side":"right"},
    {"duration":0,"unitStart":59,"type":"tap","side":"left"},

    {"duration":1.5,"unitStart":60,"type":"hold","side":"left"},
    {"duration":1.5,"unitStart":61.5,"type":"hold","side":"right"},
    {"duration":1,"unitStart":63,"type":"hold","side":"left"},
    {"duration":1.5,"unitStart":64,"type":"hold","side":"right"},
    {"duration":1.5,"unitStart":65.5,"type":"hold","side":"left"},
    {"duration":0,"unitStart":67,"type":"swipe","side":"right"},

    {"duration":1.5,"unitStart":68,"type":"hold","side":"right"},
    {"duration":1.5,"unitStart":69.5,"type":"hold","side":"left"},
    {"duration":1,"unitStart":71,"type":"hold","side":"right"},
    {"duration":1.5,"unitStart":72,"type":"hold","side":"left"},
    {"duration":1.5,"unitStart":73.5,"type":"hold","side":"right"},
    {"duration":0,"unitStart":75,"type":"tap","side":"left"},

    {"duration":1.5,"unitStart":76,"type":"hold","side":"left"},
    {"duration":1.5,"unitStart":77.5,"type":"hold","side":"right"},
    {"duration":1,"unitStart":79,"type":"hold","side":"left"},

    {"duration":0,"unitStart":80,"type":"tap","side":"right"},
    {"duration":0,"unitStart":81,"type":"tap","side":"left"},
    {"duration":2,"unitStart":82,"type":"hold","side":"right"},
    {"duration":0,"unitStart":83,"type":"tap","side":"left"},

    {"duration":0,"unitStart":84,"type":"swipe","side":"left"},
    {"duration":3,"unitStart":85,"type":"hold","side":"left"},
    {"duration":0,"unitStart":87,"type":"tap","side":"right"},

    {"duration":0,"unitStart":88,"type":"swipe","side":"right"},
    {"duration":2,"unitStart":89,"type":"hold","side":"right"},
    {"duration":1,"unitStart":91,"type":"hold","side":"left"},

    {"duration":0,"unitStart":92,"type":"swipe","side":"right"},
    {"duration":3,"unitStart":93,"type":"hold","side":"right"},
    {"duration":0,"unitStart":95,"type":"tap","side":"left"},

    {"duration":0,"unitStart":96,"type":"swipe","side":"left"},
    {"duration":0,"unitStart":97,"type":"swipe","side":"right"},
    {"duration":0,"unitStart":98,"type":"swipe","side":"left"},

    {"duration":1,"unitStart":99,"type":"hold","side":"left"},

    {"duration":0,"unitStart":100,"type":"swipe","side":"right"},
    {"duration":3,"unitStart":101,"type":"hold","side":"right"},
    {"duration":0,"unitStart":103,"type":"tap","side":"left"},

    {"duration":0,"unitStart":104,"type":"swipe","side":"left"},
    {"duration":2,"unitStart":105,"type":"hold","side":"left"},
    {"duration":1,"unitStart":107,"type":"hold","side":"right"},

    {"duration":0,"unitStart":108,"type":"swipe","side":"left"},
    {"duration":2,"unitStart":109,"type":"hold","side":"left"},
    {"duration":0,"unitStart":111,"type":"swipe","side":"right"},

    {"duration":1,"unitStart":112,"type":"hold","side":"right"},
    {"duration":1,"unitStart":113,"type":"hold","side":"left"},
    {"duration":1,"unitStart":114,"type":"hold","side":"right"},
    {"duration":0,"unitStart":115,"type":"swipe","side":"left"},

    {"duration":1,"unitStart":116,"type":"hold","side":"left"},
    {"duration":0,"unitStart":117,"type":"tap","side":"right"},
    {"duration":1,"unitStart":118,"type":"hold","side":"right"},
    {"duration":0,"unitStart":119,"type":"tap","side":"left"},
    {"duration":1,"unitStart":120,"type":"hold","side":"left"},
    {"duration":0,"unitStart":121,"type":"tap","side":"right"},
    {"duration":1,"unitStart":122,"type":"hold","side":"left"},
    {"duration":0,"unitStart":123,"type":"tap","side":"right"},

    {"duration":1,"unitStart":124,"type":"hold","side":"right"},
    {"duration":0,"unitStart":125,"type":"swipe","side":"left"},
    {"duration":1,"unitStart":126,"type":"hold","side":"left"},
    {"duration":0,"unitStart":127,"type":"swipe","side":"right"},
    {"duration":1,"unitStart":128,"type":"hold","side":"right"},
    {"duration":0,"unitStart":129,"type":"swipe","side":"left"},
    {"duration":0,"unitStart":130,"type":"swipe","side":"right"},
    {"duration":0,"unitStart":131,"type":"swipe","side":"left"},

    {"duration":0.75,"unitStart":132.25,"type":"hold","side":"left"},
    {"duration":0.75,"unitStart":133,"type":"hold","side":"right"},
    {"duration":0.75,"unitStart":133.75,"type":"hold","side":"left"},
    {"duration":1,"unitStart":134.5,"type":"hold","side":"right"},
    {"duration":0.5,"unitStart":135.5,"type":"hold","side":"left"},

    {"duration":0,"unitStart":136,"type":"swipe","side":"right"},
    {"duration":0,"unitStart":136.75,"type":"tap","side":"right"},
    {"duration":0,"unitStart":137.5,"type":"tap","side":"left"},
    {"duration":0,"unitStart":138,"type":"swipe","side":"right"},
    {"duration":0,"unitStart":139,"type":"swipe","side":"left"},

    {"duration":1,"unitStart":140,"type":"hold","side":"left"},
    {"duration":0,"unitStart":141,"type":"swipe","side":"right"},
    {"duration":1,"unitStart":142,"type":"hold","side":"right"},
    {"duration":0,"unitStart":143,"type":"swipe","side":"left"},
    {"duration":3,"unitStart":144,"type":"hold","side":"left"},
    {"duration":0,"unitStart":145,"type":"tap","side":"right"},
    {"duration":0,"unitStart":146,"type":"tap","side":"right"},
    {"duration":0,"unitStart":147,"type":"swipe","side":"right"},

    {"duration":0,"unitStart":148,"type":"tap","side":"right"},
    {"duration":0,"unitStart":149,"type":"tap","side":"left"},
    {"duration":0,"unitStart":150,"type":"swipe","side":"right"},
    {"duration":0,"unitStart":151,"type":"swipe","side":"left"},

    {"duration":0,"unitStart":152,"type":"tap","side":"right"},
    {"duration":0,"unitStart":153,"type":"tap","side":"left"},
    {"duration":0,"unitStart":154,"type":"swipe","side":"right"},
    {"duration":0,"unitStart":155,"type":"swipe","side":"left"},

    {"duration":0,"unitStart":156,"type":"tap","side":"right"},
    {"duration":0,"unitStart":157,"type":"tap","side":"left"},
    {"duration":0,"unitStart":158,"type":"swipe","side":"right"},
    {"duration":0,"unitStart":159,"type":"swipe","side":"left"},
    {"duration":0,"unitStart":160,"type":"swipe","side":"right"},
    {"duration":0,"unitStart":161,"type":"swipe","side":"left"},
    {"duration":0,"unitStart":162,"type":"swipe","side":"right"},
    {"duration":0,"unitStart":163,"type":"swipe","side":"left"},

    {"duration":3,"unitStart":164,"type":"hold","side":"left"},
    {"duration":1.5,"unitStart":165.5,"type":"hold","side":"right"},
    {"duration":0,"unitStart":167,"type":"swipe","side":"right"},

    {"duration":3,"unitStart":168,"type":"hold","side":"right"},
    {"duration":1.5,"unitStart":169.5,"type":"hold","side":"left"},
    {"duration":0,"unitStart":171,"type":"swipe","side":"left"},

    {"duration":1.5,"unitStart":172,"type":"hold","side":"left"},
    {"duration":1.5,"unitStart":173.5,"type":"hold","side":"right"},
    {"duration":1,"unitStart":175,"type":"hold","side":"left"},
    {"duration":0,"unitStart":176,"type":"tap","side":"right"},
    {"duration":0,"unitStart":177,"type":"tap","side":"left"},
    {"duration":2,"unitStart":178,"type":"hold","side":"right"},
    {"duration":1,"unitStart":179,"type":"hold","side":"left"},
    {"duration":0,"unitStart":180,"type":"swipe","side":"right"},
  ]
}

var lone_digger = {
  "title": "Lone Digger [Medium]",
  "offset": 0.17,
  "timePerBeat": 60 / 124,
  "unitsPerBeat": 1,
  "totalBeats": 140,
  "audioPath": "ogg/lonedigger.ogg",
  "notes": [
    {"duration":0,"unitStart":8,"type":"tap","side":"right"},
    {"duration":2,"unitStart":9,"type":"hold","side":"left"},
    {"duration":0,"unitStart":10,"type":"tap","side":"right"},
    {"duration":0,"unitStart":11,"type":"swipe", "side":"right"},

    {"duration":0,"unitStart":12,"type":"tap","side":"left"},
    {"duration":2,"unitStart":13,"type":"hold","side":"right"},
    {"duration":0,"unitStart":14,"type":"tap","side":"left"},
    {"duration":0,"unitStart":15,"type":"swipe", "side":"left"},

    {"duration":0,"unitStart":16,"type":"tap","side":"right"},
    {"duration":2,"unitStart":17,"type":"hold","side":"left"},
    {"duration":0,"unitStart":18,"type":"tap","side":"right"},
    {"duration":0,"unitStart":19,"type":"swipe", "side":"right"},

    {"duration":2,"unitStart":20,"type":"hold","side":"left"},
    {"duration":1,"unitStart":22,"type":"hold","side":"right"},
    {"duration":0,"unitStart":23,"type":"swipe", "side":"left"},

    {"duration":0,"unitStart":24,"type":"tap","side":"left"},
    {"duration":2,"unitStart":25,"type":"hold","side":"right"},
    {"duration":0,"unitStart":26,"type":"tap","side":"left"},
    {"duration":0,"unitStart":27,"type":"swipe", "side":"left"},

    {"duration":0,"unitStart":28,"type":"tap","side":"right"},
    {"duration":2,"unitStart":29,"type":"hold","side":"left"},
    {"duration":0,"unitStart":30,"type":"tap","side":"right"},
    {"duration":0,"unitStart":31,"type":"swipe", "side":"right"},

    {"duration":0,"unitStart":32,"type":"tap","side":"left"},
    {"duration":2,"unitStart":33,"type":"hold","side":"right"},
    {"duration":0,"unitStart":34,"type":"tap","side":"left"},
    {"duration":0,"unitStart":35,"type":"swipe", "side":"left"},

    {"duration":3.5,"unitStart":36,"type":"hold","side":"left"},
    {"duration":0,"unitStart":39.5,"type":"swipe","side":"right"},

    {"duration":0,"unitStart":41,"type":"tap","side":"right"},
    {"duration":0,"unitStart":43,"type":"tap","side":"left"},
    {"duration":0,"unitStart":45,"type":"tap","side":"right"},
    {"duration":0,"unitStart":47,"type":"tap","side":"left"},
    {"duration":0,"unitStart":49,"type":"tap","side":"right"},
    {"duration":0,"unitStart":51,"type":"tap","side":"left"},

    {"duration":1,"unitStart":52,"type":"hold","side":"right"},
    {"duration":0,"unitStart":53,"type":"swipe", "side":"left"},
    {"duration":1,"unitStart":54,"type":"hold","side":"left"},
    {"duration":0,"unitStart":55,"type":"swipe", "side":"right"},

    {"duration":0,"unitStart":57,"type":"tap","side":"right"},
    {"duration":0,"unitStart":59,"type":"tap","side":"left"},
    {"duration":0,"unitStart":61,"type":"tap","side":"right"},
    {"duration":0,"unitStart":63,"type":"tap","side":"left"},
    {"duration":0,"unitStart":65,"type":"tap","side":"right"},
    {"duration":0,"unitStart":67,"type":"tap","side":"left"},

    {"duration":0,"unitStart":68,"type":"swipe", "side":"right"},

    {"duration":0,"unitStart":71.5,"type":"swipe", "side":"left"},

    {"duration":0,"unitStart":73,"type":"tap","side":"right"},
    {"duration":1,"unitStart":74,"type":"hold","side":"right"},

    {"duration":0,"unitStart":75,"type":"tap","side":"left"},
    {"duration":1,"unitStart":76,"type":"hold","side":"left"},

    {"duration":0,"unitStart":77,"type":"tap","side":"right"},
    {"duration":1,"unitStart":78,"type":"hold","side":"right"},

    {"duration":1,"unitStart":79,"type":"hold","side":"left"},
    {"duration":0,"unitStart":80,"type":"swipe", "side":"right"}, 

    {"duration":1,"unitStart":81,"type":"hold","side":"right"},
    {"duration":0,"unitStart":82,"type":"tap","side":"left"},

    {"duration":1,"unitStart":83,"type":"hold","side":"left"},
    {"duration":0,"unitStart":84,"type":"tap","side":"right"},
 
    {"duration":0,"unitStart":85,"type":"tap","side":"left"},
    {"duration":0,"unitStart":86,"type":"tap","side":"right"},
    {"duration":0,"unitStart":87,"type":"tap","side":"left"},

    {"duration":0,"unitStart":88,"type":"swipe", "side":"right"},
    {"duration":1,"unitStart":89,"type":"hold","side":"right"},
    {"duration":0,"unitStart":90,"type":"swipe", "side":"left"},
    {"duration":0,"unitStart":91,"type":"swipe", "side":"right"},

    {"duration":0,"unitStart":92,"type":"tap","side":"left"},
    {"duration":1,"unitStart":93,"type":"hold","side":"left"},
    {"duration":0,"unitStart":94,"type":"swipe", "side":"right"},
    {"duration":0,"unitStart":95,"type":"swipe", "side":"left"},
    
    {"duration":0,"unitStart":96,"type":"tap","side":"left"},
    {"duration":0,"unitStart":97,"type":"tap","side":"left"},
    {"duration":0,"unitStart":98,"type":"tap","side":"right"},
    {"duration":0,"unitStart":99,"type":"tap","side":"right"},

    {"duration":3,"unitStart":100,"type":"hold","side":"left"},
    {"duration":1,"unitStart":103,"type":"hold","side":"right"},

    {"duration":0,"unitStart":104,"type":"swipe", "side":"left"},
    {"duration":0,"unitStart":105,"type":"swipe", "side":"right"},
    {"duration":0,"unitStart":106,"type":"tap","side":"right"},
    {"duration":1,"unitStart":107,"type":"hold","side":"left"},

    {"duration":0,"unitStart":108,"type":"swipe", "side":"right"},
    {"duration":0,"unitStart":109,"type":"swipe", "side":"left"},
    {"duration":0,"unitStart":110,"type":"tap","side":"left"},
    {"duration":1,"unitStart":111,"type":"hold","side":"right"},

    {"duration":0,"unitStart":112,"type":"swipe", "side":"left"},
    {"duration":0,"unitStart":113,"type":"swipe", "side":"right"},
    {"duration":0,"unitStart":114,"type":"tap","side":"right"},
    {"duration":1,"unitStart":115,"type":"hold","side":"left"},

    {"duration":0,"unitStart":116,"type":"tap","side":"right"},
    {"duration":0,"unitStart":117,"type":"tap","side":"left"},
    {"duration":0,"unitStart":118,"type":"tap","side":"right"},
    {"duration":1,"unitStart":119,"type":"tap","side":"left"},

    {"duration":0,"unitStart":120,"type":"swipe", "side":"right"},
    {"duration":0,"unitStart":121,"type":"swipe", "side":"left"},
    {"duration":0,"unitStart":122,"type":"tap","side":"left"},
    {"duration":1,"unitStart":123,"type":"hold","side":"right"},

    {"duration":0,"unitStart":124,"type":"swipe", "side":"left"},
    {"duration":0,"unitStart":125,"type":"swipe", "side":"right"},
    {"duration":0,"unitStart":126,"type":"tap","side":"right"},
    {"duration":1,"unitStart":127,"type":"hold","side":"left"},

    {"duration":0,"unitStart":128,"type":"swipe", "side":"right"},
    {"duration":0,"unitStart":129,"type":"swipe", "side":"left"},
    {"duration":0,"unitStart":130,"type":"tap", "side":"left"},
    {"duration":1,"unitStart":131,"type":"hold","side":"right"},

    {"duration":3.5,"unitStart":132,"type":"hold","side":"left"},
    {"duration":0,"unitStart":135.5,"type":"swipe", "side":"right"}
  ]
}

var bapple_easy = {
  "title": "Bad Apple [Easy]",
  "offset": 0.2,
  "timePerBeat": 60 / 138,
  "unitsPerBeat": 1,
  "totalBeats": 64,
  "audioPath": "ogg/bapple.ogg",
  "notes":[
    {"duration":0,"unitStart":0,"type":"tap","side":"left"},
    {"duration":0,"unitStart":1,"type":"tap","side":"left"},
    {"duration":0,"unitStart":2,"type":"tap","side":"left"},

    {"duration":0,"unitStart":3,"type":"swipe", "side":"right"},

    {"duration":0,"unitStart":4,"type":"tap","side":"right"},
    {"duration":0,"unitStart":5,"type":"tap","side":"right"},
    {"duration":0,"unitStart":6,"type":"tap","side":"right"},

    {"duration":0,"unitStart":7,"type":"swipe", "side":"left"},

    {"duration":0,"unitStart":8,"type":"tap","side":"left"},
    {"duration":0,"unitStart":9,"type":"tap","side":"right"},
    {"duration":0,"unitStart":10,"type":"tap","side":"left"},

    {"duration":0,"unitStart":11,"type":"swipe","side":"right"},

    {"duration":0,"unitStart":12,"type":"tap","side":"right"},
    {"duration":0,"unitStart":13,"type":"tap","side":"left"},
    {"duration":0,"unitStart":14,"type":"tap","side":"right"},

    {"duration":2,"unitStart":16,"type":"hold","side":"right"},
    {"duration":0,"unitStart":16,"type":"tap","side":"left"},
    {"duration":0,"unitStart":17,"type":"tap","side":"left"},
    {"duration":0,"unitStart":18,"type":"tap","side":"left"},

    {"duration":2,"unitStart":20,"type":"hold","side":"left"},
    {"duration":0,"unitStart":20,"type":"tap","side":"right"},
    {"duration":0,"unitStart":21,"type":"tap","side":"right"},
    {"duration":0,"unitStart":22,"type":"tap","side":"right"},

    {"duration":2,"unitStart":24,"type":"hold","side":"right"},
    {"duration":0,"unitStart":25,"type":"tap","side":"left"},
    {"duration":2,"unitStart":26,"type":"hold","side":"left"},
    {"duration":0,"unitStart":27,"type":"tap","side":"right"},
    {"duration":2,"unitStart":28,"type":"hold","side":"right"},
    {"duration":0,"unitStart":29,"type":"tap","side":"left"},
    {"duration":0,"unitStart":30,"type":"tap","side":"left"},
    {"duration":0,"unitStart":31,"type":"tap","side":"left"},
    {"duration":0,"unitStart":31,"type":"tap","side":"right"},

    {"duration":0,"unitStart":32,"type":"tap","side":"left"},
    {"duration":0,"unitStart":33,"type":"tap","side":"left"},
    {"duration":1,"unitStart":34,"type":"hold","side":"left"},

    {"duration":0,"unitStart":36,"type":"tap","side":"right"},
    {"duration":0,"unitStart":37,"type":"tap","side":"right"},
    {"duration":1,"unitStart":38,"type":"hold","side":"right"},

    {"duration":0,"unitStart":40,"type":"tap","side":"left"},
    {"duration":0,"unitStart":41,"type":"tap","side":"left"},
    {"duration":1,"unitStart":42,"type":"hold","side":"right"},

    {"duration":0,"unitStart":44,"type":"tap","side":"right"},
    {"duration":0,"unitStart":45,"type":"tap","side":"right"},
    {"duration":1,"unitStart":46,"type":"hold","side":"left"},

    {"duration":0,"unitStart":48,"type":"tap","side":"left"},
    {"duration":0,"unitStart":49,"type":"tap","side":"right"},
    {"duration":1,"unitStart":50,"type":"hold","side":"left"},

    {"duration":0,"unitStart":52,"type":"tap","side":"right"},
    {"duration":0,"unitStart":53,"type":"tap","side":"left"},
    {"duration":1,"unitStart":54,"type":"hold","side":"right"},

    {"duration":0,"unitStart":56,"type":"tap","side":"left"},
    {"duration":0,"unitStart":57,"type":"tap","side":"left"},
    {"duration":0,"unitStart":58,"type":"tap","side":"right"},
    {"duration":0,"unitStart":59,"type":"tap","side":"right"},
    {"duration":0,"unitStart":60,"type":"tap","side":"left"},
    {"duration":0,"unitStart":61,"type":"tap","side":"left"},

    {"duration":1,"unitStart":62,"type":"hold","side":"left"},
    {"duration":1,"unitStart":62,"type":"hold","side":"right"}
  ]
}

var bapple_hard = {
  "title": "Bad Apple [Hard]",
  "offset": 0.2,
  "timePerBeat": 60 / 138,
  "unitsPerBeat": 1,
  "totalBeats": 36,
  "audioPath": "ogg/bapple.ogg",
  "notes": [
    {"duration":0,"unitStart":0,"type":"tap","side":"left"},
    {"duration":0,"unitStart":1,"type":"tap","side":"left"},
    {"duration":0,"unitStart":2,"type":"tap","side":"left"},

    {"duration":0,"unitStart":3,"type":"tap","side":"left"},
    {"duration":0,"unitStart":3.25,"type":"tap","side":"right"},
    {"duration":0,"unitStart":3.5,"type":"tap","side":"left"},
    {"duration":0,"unitStart":3.75,"type":"tap","side":"right"},
    {"duration":0,"unitStart":4,"type":"tap","side":"left"},

    {"duration":0,"unitStart":5,"type":"tap","side":"left"},
    {"duration":0,"unitStart":6,"type":"tap","side":"left"},

    {"duration":0,"unitStart":7,"type":"tap","side":"right"},
    {"duration":0,"unitStart":7.5,"type":"tap","side":"right"},

    {"duration":0,"unitStart":8,"type":"tap","side":"left"},
    {"duration":0,"unitStart":9,"type":"tap","side":"left"},
    {"duration":0,"unitStart":10,"type":"tap","side":"left"},

    {"duration":0,"unitStart":11,"type":"tap","side":"left"},
    {"duration":0,"unitStart":11.25,"type":"tap","side":"right"},
    {"duration":0,"unitStart":11.5,"type":"tap","side":"left"},
    {"duration":0,"unitStart":11.75,"type":"tap","side":"right"},
    {"duration":0,"unitStart":12,"type":"tap","side":"left"},

    {"duration":0,"unitStart":13,"type":"tap","side":"right"},
    {"duration":0,"unitStart":14,"type":"tap","side":"right"},

    {"duration":0,"unitStart":15,"type":"tap","side":"left"},
    {"duration":0,"unitStart":15.5,"type":"tap","side":"left"},

    {"duration":0,"unitStart":16,"type":"tap","side":"right"},
    {"duration":1,"unitStart":17,"type":"hold","side":"left"},
    {"duration":0,"unitStart":17,"type":"tap","side":"right"},
    {"duration":0,"unitStart":18,"type":"tap","side":"right"},

    {"duration":0,"unitStart":19,"type":"tap","side":"right"},
    {"duration":0,"unitStart":19.25,"type":"tap","side":"left"},
    {"duration":0,"unitStart":19.5,"type":"tap","side":"right"},
    {"duration":0,"unitStart":19.75,"type":"tap","side":"left"},
    {"duration":0,"unitStart":20,"type":"tap","side":"right"},

    {"duration":1,"unitStart":21,"type":"hold","side":"right"},
    {"duration":0,"unitStart":21,"type":"tap","side":"left"},
    {"duration":0,"unitStart":22,"type":"tap","side":"left"},

    {"duration":0,"unitStart":23,"type":"tap","side":"left"},
    {"duration":0,"unitStart":23.5,"type":"tap","side":"left"},

    {"duration":2,"unitStart":24,"type":"hold","side":"right"},
    {"duration":0,"unitStart":25,"type":"tap","side":"left"},

    {"duration":2,"unitStart":26,"type":"hold","side":"left"},
    {"duration":0,"unitStart":27,"type":"tap","side":"right"},

    {"duration":2,"unitStart":28,"type":"hold","side":"right"},
    {"duration":0,"unitStart":29,"type":"tap","side":"left"},

    {"duration":0,"unitStart":30,"type":"tap","side":"left"},

    {"duration":0,"unitStart":31,"type":"tap","side":"left"},
    {"duration":0,"unitStart":31,"type":"tap","side":"right"}
  ]
}

var bapple_autogen = {
  "title": "Bad Apple [wut.jpg]",
  "offset": 0.2,
  "timePerBeat": 60 / 138,
  "unitsPerBeat": 1,
  "totalBeats": 1000,
  "audioPath": "ogg/bapple.ogg",
  "notes":[
    {'duration': 0, 'unitStart': 0, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 3, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 4, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 7, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 8, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 11, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 12, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 15, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 16, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 17, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 19, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 20, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 21, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 23, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 24, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 25, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 27, 'type': 'tap', 'side': 'left'},
    {'duration': 4, 'unitStart': 28, 'type': 'hold', 'side': 'right'},
    {'duration': 0, 'unitStart': 32, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 34, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 36, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 38, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 39, 'type': 'tap', 'side': 'left'},
    {'duration': 1, 'unitStart': 40, 'type': 'hold', 'side': 'left'},
    {'duration': 0, 'unitStart': 42, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 44, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 46, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 47, 'type': 'tap', 'side': 'left'},
    {'duration': 1, 'unitStart': 48, 'type': 'hold', 'side': 'right'},
    {'duration': 0, 'unitStart': 50, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 52, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 54, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 55, 'type': 'tap', 'side': 'left'},
    {'duration': 1, 'unitStart': 56, 'type': 'hold', 'side': 'left'},
    {'duration': 0, 'unitStart': 58, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 60, 'type': 'tap', 'side': 'left'},
    {'duration': 1, 'unitStart': 62, 'type': 'hold', 'side': 'right'},
    {'duration': 1, 'unitStart': 63, 'type': 'hold', 'side': 'left'},
    {'duration': 0, 'unitStart': 64, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 66, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 68, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 70, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 71, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 72, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 74, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 76, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 77, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 78, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 79, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 80, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 82, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 84, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 86, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 87, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 88, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 90, 'type': 'tap', 'side': 'left'},
    {'duration': 1, 'unitStart': 92, 'type': 'hold', 'side': 'right'},
    {'duration': 1, 'unitStart': 93, 'type': 'hold', 'side': 'left'},
    {'duration': 1, 'unitStart': 94, 'type': 'hold', 'side': 'right'},
    {'duration': 1, 'unitStart': 95, 'type': 'hold', 'side': 'left'},
    {'duration': 0, 'unitStart': 96, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 98, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 100, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 102, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 103, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 104, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 106, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 108, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 109, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 110, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 111, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 112, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 114, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 116, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 118, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 119, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 120, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 122, 'type': 'tap', 'side': 'left'},
    {'duration': 1, 'unitStart': 124, 'type': 'hold', 'side': 'left'},
    {'duration': 1, 'unitStart': 125, 'type': 'hold', 'side': 'right'},
    {'duration': 1, 'unitStart': 126, 'type': 'hold', 'side': 'left'},
    {'duration': 1, 'unitStart': 127, 'type': 'hold', 'side': 'right'},
    {'duration': 0, 'unitStart': 128, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 130, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 131, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 132, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 134, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 135, 'type': 'tap', 'side': 'right'},
    {'duration': 4, 'unitStart': 136, 'type': 'hold', 'side': 'left'},
    {'duration': 4, 'unitStart': 140, 'type': 'hold', 'side': 'right'},
    {'duration': 0, 'unitStart': 144, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 146, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 147, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 148, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 150, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 151, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 152, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 153, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 154, 'type': 'tap', 'side': 'left'},
    {'duration': 1, 'unitStart': 156, 'type': 'hold', 'side': 'right'},
    {'duration': 1, 'unitStart': 157, 'type': 'hold', 'side': 'right'},
    {'duration': 1, 'unitStart': 158, 'type': 'hold', 'side': 'right'},
    {'duration': 1, 'unitStart': 160, 'type': 'hold', 'side': 'left'},
    {'duration': 1, 'unitStart': 162, 'type': 'hold', 'side': 'left'},
    {'duration': 1, 'unitStart': 164, 'type': 'hold', 'side': 'right'},
    {'duration': 1, 'unitStart': 166, 'type': 'hold', 'side': 'right'},
    {'duration': 1, 'unitStart': 168, 'type': 'hold', 'side': 'left'},
    {'duration': 1, 'unitStart': 170, 'type': 'hold', 'side': 'left'},
    {'duration': 1, 'unitStart': 172, 'type': 'hold', 'side': 'right'},
    {'duration': 1, 'unitStart': 174, 'type': 'hold', 'side': 'right'},
    {'duration': 0, 'unitStart': 176, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 177, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 178, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 179, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 180, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 181, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 182, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 183, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 184, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 185, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 186, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 187, 'type': 'tap', 'side': 'right'},
    {'duration': 4, 'unitStart': 188, 'type': 'hold', 'side': 'left'},
    {'duration': 0, 'unitStart': 192, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 194, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 196, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 197, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 198, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 200, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 202, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 204, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 205, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 206, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 208, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 210, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 212, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 214, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 216, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 218, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 220, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 222, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 224, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 226, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 228, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 230, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 232, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 234, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 236, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 238, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 240, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 241, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 242, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 243, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 244, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 245, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 246, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 247, 'type': 'tap', 'side': 'right'},
    {'duration': 0, 'unitStart': 248, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 250, 'type': 'tap', 'side': 'left'},
    {'duration': 0, 'unitStart': 252, 'type': 'tap', 'side': 'left'},
    {'duration': 1, 'unitStart': 254, 'type': 'hold', 'side': 'left'},
    {'duration': 1, 'unitStart': 255, 'type': 'hold', 'side': 'left'},
    {'duration': 1, 'unitStart': 256, 'type': 'hold', 'side': 'left'}
  ]
}

var tracks = {
  fireflies,
  lone_digger,
  kill_the_beat,
  bapple_easy,
  bapple_hard,
  bapple_autogen,
  mozart,
  pokemon
}

var track = tracks[trackSelected]

console.log(`Chart Selected: ${track.title}`)

track.notes.sort((a, b) => {
  return (a.unitStart - b.unitStart);
});

var loadSong = () => {
  track = tracks[trackSelected]
  document.getElementById("audio").setAttribute('src', track.audioPath)
}

var levels = {
  tracks,
  track,
  loadSong
}