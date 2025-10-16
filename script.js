// 图片轮播
const images = ["assets_cond_gen/v259.png",
                "assets_cond_gen/v2278.png",
                "assets_cond_gen/v19068.png"];
let currentImage = 0;
const imageIndex = document.getElementById("image-index");

function showImage() {
    document.getElementById("carousel-image").src = images[currentImage];
    imageIndex.textContent = `${currentImage + 1} / ${images.length}`;
    updateAudio();
}

function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    showImage();
}

function prevImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    showImage();
}

// Chord 音频 + 文本
const chords = ["assets_cond_gen/c9.mid",
                "assets_cond_gen/c295.mid", 
                "assets_cond_gen/c5873.mid"
];
let currentChord = 0;

const chordPlayer = document.getElementById("midi-player");
const chordVisualizer = document.getElementById("midi-visualizer");
const chordIndex = document.getElementById("chord-index");

function showChord() {
    chordPlayer.stop();
    chordPlayer.src = chords[currentChord];
    chordPlayer.reload();
    chordVisualizer.src = chords[currentChord];
    chordIndex.textContent = `${currentChord + 1} / ${chords.length}`;
    updateAudio();
}

function nextChord() {
    currentChord = (currentChord + 1) % chords.length;
    showChord();
}

function prevChord() {
    currentChord = (currentChord - 1 + chords.length) % chords.length;
    showChord();
}

// Audio 自动对应 image + Chord
const audioMap = {
    "0_0": { audio: "assets_cond_gen/v259c9.mp3", pianoroll: "assets_cond_gen/v259c9.png" },
    "1_0": { audio: "assets_cond_gen/v2278c9.mp3", pianoroll: "assets_cond_gen/v2278c9.png" },
    "2_0": { audio: "assets_cond_gen/v19068c9.mp3", pianoroll: "assets_cond_gen/v19068c9.png" },
    "0_1": { audio: "assets_cond_gen/v259c295.mp3", pianoroll: "assets_cond_gen/v259c295.png" },
    "1_1": { audio: "assets_cond_gen/v2278c295.mp3", pianoroll: "assets_cond_gen/v2278c295.png" },
    "2_1": { audio: "assets_cond_gen/v19068c295.mp3", pianoroll: "assets_cond_gen/v19068c295.png" },
    "0_2": { audio: "assets_cond_gen/v259c5873.mp3", pianoroll: "assets_cond_gen/v259c5873.png" },
    "1_2": { audio: "assets_cond_gen/v2278c5873.mp3", pianoroll: "assets_cond_gen/v2278c5873.png" },
    "2_2": { audio: "assets_cond_gen/v19068c5873.mp3", pianoroll: "assets_cond_gen/v19068c5873.png" },
};

const audioPlayer = document.getElementById("audio-player");
const audioPianoroll = document.getElementById("audio-pianoroll");

function updateAudio() {
    const key = `${currentImage}_${currentChord}`;
    audioPlayer.src = audioMap[key].audio;
    audioPianoroll.src = audioMap[key].pianoroll;
}

// 初始化
showImage();
showChord();

// Prompt Continuation Comparison
const comparisonData = {
    '830':{
        'ground-truth': {
            pianoroll: "assets_cont/830/gt.png",
            audio: "assets_cont/830/gt.mp3"
        },
        'ours': {
            pianoroll: "assets_cont/830/ours.png",
            audio: "assets_cont/830/ours.mp3"
        },
        'amt': {
            pianoroll: "assets_cont/830/atc.png",
            audio: "assets_cont/830/atc.mp3"
        }
    },
    '532':{
        'ground-truth': {
            pianoroll: "assets_cont/532/gt.png",
            audio: "assets_cont/532/gt.mp3"
        },
        'ours': {
            pianoroll: "assets_cont/532/ours.png",
            audio: "assets_cont/532/ours.mp3"
        },
        'amt': {
            pianoroll: "assets_cont/532/atc.png",
            audio: "assets_cont/532/atc.mp3"
        }
    },
    '128':{
        'ground-truth': {
            pianoroll: "assets_cont/128/gt.png",
            audio: "assets_cont/128/gt.mp3"
        },
        'ours': {
            pianoroll: "assets_cont/128/ours.png",
            audio: "assets_cont/128/ours.mp3"
        },
        'amt': {
            pianoroll: "assets_cont/128/atc.png",
            audio: "assets_cont/128/atc.mp3"
        }
    }
};


const comparisonPianoroll = document.getElementById("comparison-pianoroll");
const comparisonAudioPlayer = document.getElementById("comparison-audio-player");
const comparisonBoxes = document.querySelectorAll(".comparison-box");

function showComparison(type, idx) {
    // Remove active class from all boxes
    document.querySelectorAll(`.comparison-box-${idx}`).forEach(box => box.classList.remove("active"));

    // Add active class to the clicked box
    document.getElementById(`${type}-box-${idx}`).classList.add("active");

    // Update pianoroll and audio
    document.getElementById(`comparison-pianoroll-${idx}`).src = comparisonData[idx][type].pianoroll;
    document.getElementById(`comparison-audio-player-${idx}`).src = comparisonData[idx][type].audio;
    document.getElementById(`comparison-audio-player-${idx}`).load(); // Load the new audio source
}

