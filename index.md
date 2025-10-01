---
layout: home
---

<head>
    <link rel="stylesheet" href="styles.css">
</head>

<p style="text-align: center;">
    Xiaoyu Yi, Qi He, Gus Xia, Ziyu Wang @<a href="http://www.musicxlab.com/">MusicXLab</a>
    <br>
    <a href="https://arxiv.org/abs/2405.09901">[Paper]</a> <a href="https://github.com/ZZWaang/whole-song-gen">[Code Repo]</a>
</p>

This demo accompanies the paper *VITEX: Visual Texture Control for Multi-Track Symbolic Music Generation via Discrete Diffusion Models*.  
Our method controls the compositional texture of each track and generates multi-track symbolic music using the carefully designed **Visual Texture (ViTex)** representation.  
ViTex not only provides a direct interface for conditioning downstream generative models, but also enables intuitive visualization and interpretation.


# An Example of ViTex

![An Exmaple of ViTex](/assets/images/vitex_0.png)

This figure provides an intuitive illustration of ViTex. It can be interpreted directly: different colors correspond to different instruments, as indicated in the legend at the top right. The horizontal axis represents time (with a bar-level resolution), while the vertical axis corresponds to pitch range (quantized to 16 semitone bins). The shape patterns encode the texture of each part: in this example, the bass occupies the low register with sustained lines, the piano plays block chords in a homophonic style, the guitar provides rhythmic chordal patterns such as strumming, and the strings (e.g., violin) contribute a fragmented melodic line in the upper register.

<section id="vis">
    <midi-player src="/assets/midis/vitex_0_no_chord_new_tempo.mid" sound-font="" visualizer="#vis midi-visualizer"> </midi-player>
    <midi-visualizer src="/assets/midis/vitex_0_no_chord_new_tempo.mid" type="piano-roll"> </midi-visualizer>
</section>


<script
    src="https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.23.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.5.0">
</script>


Thanks <a href="https://cifkao.github.io/html-midi-player/">html-midi-player</a> for the excellent MIDI visualization.