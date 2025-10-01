import muspy


file_name = "vitex_0_no_chord"
midi = muspy.read_midi(f'{file_name}.mid')
for track in midi.tracks:
    if track.program == 0:
        for note in track.notes:
            note.velocity = 70
    if track.program/8 == 2 or track.program/8 == 3:
        for note in track.notes:
            note.velocity = 105

midi.tempos=[muspy.Tempo(0, 100)]
midi.write_midi(f"{file_name}_new_tempo.mid")

# INSTRUMENT_CATEGORY = [
#     "piano",
#     "chromatic percussion",
#     "organ",
#     "guitar",
#     "bass",
#     "strings",
#     "ensemble",
#     "brass",
#     "reed",
#     "pipe",
#     "synth",
#     "effect",
# ] 

# for track in midi.tracks:
#     if len(track.notes) < 1:
#         continue
#     instrument_category = "drum" if track.is_drum else INSTRUMENT_CATEGORY[track.program//8]
#     new_music = muspy.Music(resolution=4, tempos=[muspy.Tempo(0, 120)], time_signatures=[muspy.TimeSignature(0,4,4)])
#     new_music.tracks = [track]
#     new_music.write_midi(f"{file_name}_{instrument_category}.mid")