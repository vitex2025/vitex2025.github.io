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
Our method controls the **compositional texture** of each track and generates multi-track symbolic music using the carefully designed **Visual Texture (ViTex)** representation.  
ViTex not only provides a direct interface for conditioning downstream generative models, but also enables intuitive visualization and interpretation.


# An Example of ViTex

![An Exmaple of ViTex](/assets/images/vitex_0.png)

This figure provides an intuitive illustration of ViTex. It can be interpreted directly: different colors correspond to different instruments, as indicated in the legend at the top right. The horizontal axis represents time (with a bar-level resolution), while the vertical axis corresponds to pitch range (quantized to 16 semitone bins). The shape patterns encode the texture of each part: in this example, the bass occupies the low register with sustained lines, the piano plays block chords in a homophonic style, the guitar provides rhythmic chordal patterns such as strumming, and the strings (e.g., violin) contribute a fragmented melodic line in the upper register.


Below is an example of a piece generated under the ViTex control.
<section id="vis1">
    <midi-player src="/assets/midis/vitex_0_no_chord.mid" sound-font="" visualizer="#vis1 midi-visualizer"> </midi-player>
    <midi-visualizer src="/assets/midis/vitex_0_no_chord.mid" type="piano-roll"> </midi-visualizer>
</section>

# Adding Chord Controls

While the above example demonstrates effective **compositional texture** control, our method further supports **chord progression** control. In addition to ViTex, we incorporate user-specified chord progressions.  

For instance, given the following chord progression:
<section id="vis2">
    <midi-player src="/assets/midis/4536251.mid" sound-font="" visualizer="#vis2 midi-visualizer"> </midi-player>
    <midi-visualizer src="/assets/midis/4536251.mid" type="piano-roll"> </midi-visualizer>
</section>

Together with ViTex-based texture control, the model generates:
<section id="vis3">
    <midi-player src="/assets/midis/vitex_0_4536251.mid" sound-font="" visualizer="#vis3 midi-visualizer"> </midi-player>
    <midi-visualizer src="/assets/midis/vitex_0_4536251.mid" type="piano-roll"> </midi-visualizer>
</section>

# Reference-Based Control and Inpainting

In addition to user-specified **ViTex** and **chord progressions**, our system also supports extracting controls directly from a **reference MIDI** using rule-based methods.  

Given a reference MIDI:  
<section id="vis_ref0">
    <midi-player src="/assets/midis/ref0.mid" sound-font="" visualizer="#vis_ref0 midi-visualizer"> </midi-player>
    <midi-visualizer src="/assets/midis/ref0.mid" type="piano-roll"> </midi-visualizer>
</section>

We extract its corresponding **ViTex**:  
![ViTex Extracted from Reference MIDI](/assets/images/ref_0.png)

And the associated **chord progression**:  
<section id="vis_ref_chord0">
    <midi-player src="/assets/midis/ref_chord0.mid" sound-font="" visualizer="#vis_ref_chord0 midi-visualizer"> </midi-player>
    <midi-visualizer src="/assets/midis/ref_chord0.mid" type="piano-roll"> </midi-visualizer>
</section>

Using these as inputs, the model generates the following results:  
<section id="vis_ref0_gen0">
    <midi-player src="/assets/midis/ref0_gen0.mid" sound-font="" visualizer="#vis_ref0_gen0 midi-visualizer"> </midi-player>
    <midi-visualizer src="/assets/midis/ref0_gen0.mid" type="piano-roll"> </midi-visualizer>
</section>



Furthermore, since our model is diffusion-based, it naturally supports **inpainting**.  
For example, we can fix the first two bars as a prompt and let the model continue generating the following six bars. The continuation results are shown below:



<section id="vis_ref0_cont1">
    <midi-player src="/assets/midis/ref0_cont1.mid" sound-font="" visualizer="#vis_ref0_cont1 midi-visualizer"> </midi-player>
    <midi-visualizer src="/assets/midis/ref0_cont1.mid" type="piano-roll"> </midi-visualizer>
</section>

# Unconditional Generation

Since both ViTex and chord control are trained with **classifier-free guidance**, our model also supports **unconditional generation**.  
An example is shown below.


<section id="vis5">
    <midi-player src="/assets/midis/uncond.mid" sound-font="" visualizer="#vis5 midi-visualizer"> </midi-player>
    <midi-visualizer src="/assets/midis/uncond.mid" type="piano-roll"> </midi-visualizer>
</section>


<script
    src="https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.23.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.5.0">
</script>


Thanks <a href="https://cifkao.github.io/html-midi-player/">html-midi-player</a> for the excellent MIDI visualization.