// Consts for finding values and converting between types.

const intervalnum_to_intervalname = [
    //converts a distance into the interval name
    'Unison/Root',
    'Minor 2nd',
    'Perfect 2nd',
    'Minor 3rd',
    'Major 3rd',
    'Perfect 4th',
    'Augmented 4th/Diminished 5th',
    'Perfect 5th',
    'Minor 6th',
    'Major 6th',
    'Dominant 7th',
    'Major 7th'
]

const notename_convert = {
    'A'  : { 'notenum' : 0 , 'degreenum' : 0 },
    'A#' : { 'notenum' : 1 , 'degreenum' : 0 },
    'Bb' : { 'notenum' : 1 , 'degreenum' : 1 },
    'B'  : { 'notenum' : 2 , 'degreenum' : 1 },
    'C'  : { 'notenum' : 3 , 'degreenum' : 2 },
    'C#' : { 'notenum' : 4 , 'degreenum' : 2 },
    'Db' : { 'notenum' : 4 , 'degreenum' : 3 },
    'D'  : { 'notenum' : 5 , 'degreenum' : 3 },
    'D#' : { 'notenum' : 6 , 'degreenum' : 3 },
    'Eb' : { 'notenum' : 6 , 'degreenum' : 4 },
    'E'  : { 'notenum' : 7 , 'degreenum' : 4 },
    'F'  : { 'notenum' : 8 , 'degreenum' : 5 },
    'F#' : { 'notenum' : 9 , 'degreenum' : 5 },
    'Gb' : { 'notenum' : 9 , 'degreenum' : 6 },
    'G'  : { 'notenum' : 10 , 'degreenum' : 6 },
    'G#' : { 'notenum' : 11 , 'degreenum' : 6 },
    'Ab' : { 'notenum' : 11 , 'degreenum' : 0 },
}

const notenum_to_notename = {
    'sharps' : ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'],
    'flats'  : ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab']
}

const degreenum_to_degreeletter = ['A','B','C','D','E','F','G']

const chords = {
    'Major'           : { 'steps' : [0,4,7],    'shortname' : 'M',    'degrees' : [1,3,5] },
    'Minor'           : { 'steps' : [0,3,7],    'shortname' : 'm',    'degrees' : [1,3,5] },
    'Dominant 7'      : { 'steps' : [0,4,7,10], 'shortname' : '7',    'degrees' : [1,3,5,7] },
    'Minor 7'         : { 'steps' : [0,3,7,10], 'shortname' : 'm7',   'degrees' : [1,3,5,7] },
    'Major 7'         : { 'steps' : [0,4,7,11], 'shortname' : 'M7',   'degrees' : [1,3,5,7] },
    'Minor Major 7'   : { 'steps' : [0,3,7,11], 'shortname' : 'mM7',  'degrees' : [1,3,5,7] },
    'Major 6'         : { 'steps' : [0,4,7,9],  'shortname' : '6',    'degrees' : [1,3,5,6] },
    'Minor 6'         : { 'steps' : [0,3,7,9],  'shortname' : 'm6',   'degrees' : [1,3,5,6] },
    'Diminished'      : { 'steps' : [0,3,6,9],  'shortname' : 'dim',  'degrees' : [1,3,5,7] },
    'Half Diminished' : { 'steps' : [0,3,6,10], 'shortname' : 'm7b5', 'degrees' : [1,3,5,7] },
    'Augmented'       : { 'steps' : [0,4,8],    'shortname' : 'aug',  'degrees' : [1,3,5] }
}

const scales = {
    'Major/Ionian'   : { 'intervals' : [0,2,4,5,7,9,11,12], 'scaletype' : 'diatonic' },
    'Dorian'         : { 'intervals' : [0,2,3,5,7,9,10,12], 'scaletype' : 'diatonic' },
    'Phrygian'       : { 'intervals' : [0,1,3,5,7,8,10,12], 'scaletype' : 'diatonic' },
    'Lydian'         : { 'intervals' : [0,2,4,6,7,9,11,12], 'scaletype' : 'diatonic' },
    'Mixolydian'     : { 'intervals' : [0,2,4,5,7,9,10,12], 'scaletype' : 'diatonic' },
    'Minor/Aeolian'  : { 'intervals' : [0,2,3,5,7,8,10,12], 'scaletype' : 'diatonic' },
    'Locrian'        : { 'intervals' : [0,1,3,5,6,8,10,12], 'scaletype' : 'diatonic' },
    'Harmonic Minor' : { 'intervals' : [0,2,3,5,7,8,11,12], 'scaletype' : 'diatonic' },
    'Melodic Minor'  : { 'intervals' : [0,2,3,5,7,9,11,12], 'scaletype' : 'diatonic' },
    'Diminished'     : { 'intervals' : [0,2,3,5,6,8,9,11,12], 'scaletype' : 'other'  },
    'Whole Tone'     : { 'intervals' : [0,2,4,6,8,10,12],   'scaletype' : 'other'    },
}

const accidentals = [
    { 'symbol' : 'bbb', 'offset' : -3 , 'name' : ' Triple Flat'},
    { 'symbol' : 'bb' , 'offset' : -2 , 'name' : ' Double Flat'},
    { 'symbol' : '&#9837'  , 'offset' : -1 , 'name' : ' Flat'},
    { 'symbol' : ''   , 'offset' :  0 , 'name' : ' Natural'},
    { 'symbol' : '&#9839'  , 'offset' :  1 , 'name' : ' Sharp'},
    { 'symbol' : '&#119082' , 'offset' :  2 , 'name' : ' Double Sharp'},
    { 'symbol' : '&#119083', 'offset' :  3 , 'name' : ' Triple Sharp'}
]

const balalaika_strings = [-5,-5,0]
const domra_strings = [-5,0,5]

//Functions for finding values etc.

function accidental(offset,requested_parameter) {
    
    console.log(`ACCIDENTAL START\n[input] offset: ${offset}\n[input] requested_parameter: ${requested_parameter}`)

    requested_accidental = accidentals[offset + 3][requested_parameter]

    console.log(`[return] requested_info: ${requested_accidental}\nACCIDENTAL END`)

    return requested_accidental
}

function calc_notename(degreeletter,actual_notenum) {
    
    console.log(`CALC_NOTENAME START\n[input] degreeletter: ${degreeletter}\n[input] actual_notenum: ${actual_notenum}`)

    accidental_offset = actual_notenum - notename_convert[degreeletter]['notenum']

    console.log(`[calc] initial accidental_offset: ${accidental_offset}`)

    if (accidental_offset > 6) {
        accidental_offset -= 12
    } else if (accidental_offset < -6) {
        accidental_offset += 12
    }

    console.log(`[calc] checked accidental_offset: ${accidental_offset}`)

    actual_notename = (degreeletter + accidental(accidental_offset,'symbol'))

    console.log(`[return] actual_notename: ${actual_notename}\nCALC_NOTENAME END`)
    
    return actual_notename
}

function calc_harmonic_interval_result(start_notename,intervalnum,degreenum) {
    
    console.log(`CALC_HARMONIC_INTERVAL_RESULT START\n[input] start_notename: ${start_notename}\n[input] intervalnum: ${intervalnum}\n[input] degreenum: ${degreenum}`)

    end_notenum = (notename_convert[start_notename]['notenum'] + intervalnum) % 12
    console.log(`[calc] end_notenum: ${end_notenum}`)
    
    end_degreenum = (notename_convert[start_notename]['degreenum'] + degreenum - 1) % 7
    console.log(`[calc] end_degreenum: ${end_degreenum}`)

    end_degreeletter = degreenum_to_degreeletter[end_degreenum]
    console.log(`[calc] end_degreeletter: ${end_degreeletter}`)

    end_notename = calc_notename(end_degreeletter,end_notenum)
    console.log(`[return] end_notename: ${end_notename}\nCALC_HARMONIC_INTERVAL_RESULT END`)

    return end_notename
}

function calc_chord_notenums(root_notenum,chordname) {
    
    console.log(`CALC_CHORD_NOTENUMS START\n[input] root_notenum: ${root_notenum}\n[input] chordname: ${chordname}`)

    chord_notenums = []

    chords[chordname]['steps'].forEach(note_in_chord => {chord_notenums.push((note_in_chord + root_notenum) % 12)})
    
    console.log(`[return] chord_notenums: ${chord_notenums}\nCALC_CHORD_NOTENUMS END`)

    return chord_notenums
}

function calc_chord_notenames(root_notename,chordname) {
    
    console.log(`CALC_CHORD_NOTENAMES START\n[input] root_notename: ${root_notename}\n[input] chordname: ${chordname}`)

    root_notenum = notename_convert[root_notename]['notenum']
    console.log(`[calc] root_notenum: ${root_notenum}`)

    chord_notenums = calc_chord_notenums(root_notenum,chordname)
    console.log(`[calc] chord_notenums: ${chord_notenums}`)

    chord_notenames = []

    for (i = 0; i < chords[chordname]['steps'].length; i++) {
        console.log(`[loopstart] chord_note_${i}`)
        chord_note_x = calc_harmonic_interval_result(root_notename,chords[chordname]['steps'][i],chords[chordname]['degrees'][i])
        chord_notenames.push(chord_note_x)
        console.log(`[loopresult] chord_note_${i}: ${chord_note_x}`)
    }

    console.log(`[return] chord_notenames: ${chord_notenames}\nCALC_CHORD_NOTENAMES END`)

    return chord_notenames
}

function calc_scale_notenums(root_notenum,scale_intervalnums) {
    
    console.log(`CALC_SCALE_NOTENUMS START\n[input] root_notenum: ${root_notenum}\n[input] scale_intervalnums ${scale_intervalnums}`)

    scale_notenums = []
    console.log(`[intial] scale_notenums: ${scale_notenums}`)

    scale_intervalnums.forEach(notenum => (scale_notenums.push( ( notenum + root_notenum ) % 12 )))
    console.log(`[return] scale_notenums: ${scale_notenums}\nCALC_SCALE_NOTENUMS END`)

    return scale_notenums
}

function calc_scale_notenames(root_notename,scalename) {
    
    console.log(`CALC_SCALE_NOTENAMES START\n[input] root_notename: ${root_notename}\n[input] scalename: ${scalename}`)

    sharps_or_flats = 'sharps'

    if (root_notename.length == 2) {
        if (root_notename.slice(1,2) == 'b') {
            sharps_or_flats = 'flats'
        }
    }
    console.log(`[calc] sharps_or_flats: ${sharps_or_flats}`)


    root_notenum = notename_convert[root_notename]['notenum']
    console.log(`[calc] root_notenum: ${root_notenum}`)

    scale_intervalnums = scales[scalename]['intervals']
    console.log(`[calc] scale_intervalnums: ${scale_intervalnums}`)

    scale_notenums = calc_scale_notenums(root_notenum,scale_intervalnums)
    console.log(`[calc] scale_notenums: ${scale_notenums}`)

    scale_notenames = []

    if (scales[scalename]['intervals'].length == 8) {
        for (i = 0; i < scales[scalename]['intervals'].length; i++) {
            console.log(`[loopstart] scale_note_${i}`)
            scale_note_x = calc_harmonic_interval_result(root_notename,scales[scalename]['intervals'][i],i + 1)
            scale_notenames.push(scale_note_x)
            console.log(`[loopresult] scale_note_${i}: ${scale_note_x}`)
        }
    } else {
        scales[scalename]['intervals'].forEach(notenum =>(scale_notenames.push(notenum_to_notename[sharps_or_flats][(notenum + root_notenum) % 12 ])))
    }
    
    console.log(`[return] scale_notenames: ${scale_notenames}\nCALC_SCALE_NOTENAMES END`)

    return scale_notenames
}

function log_variables() {
    console.log(`LOG_VARIABLES START
current_chord_notename: ${variables.current_chord_notename}
current_chord: ${variables.current_chord}
current_scale_note: ${variables.current_scale_notename}
current_scale: ${variables.current_scale}
LOG_VARIABLES END`)
}

// Workspace

let variables = {
    current_chord_notename : 'A',
    current_chord : 'Major',
    current_scale_notename : 'A',
    current_scale : 'Major/Ionian',
}

document.getElementById('selectchordnote').addEventListener('change',calc_and_push_chord)
document.getElementById('selectchord').addEventListener('change',calc_and_push_chord)
document.getElementById('selectscalenote').addEventListener('change',calc_and_push_scale)
document.getElementById('selectscale').addEventListener('change',calc_and_push_scale)

function calc_and_push_chord() {
    console.log(`\n\n\n\nChord calculating!`)
    console.log(scales)

    chordnote_form = document.getElementById('selectchordnote')
    chord_form = document.getElementById('selectchord')

    variables.current_chord_notename = chordnote_form.value
    console.log(variables.current_chord_notename)
    variables.current_chord = chord_form.value

    log_variables()

    chordnotes = calc_chord_notenames(variables.current_chord_notename,variables.current_chord)
    scalenotes = calc_scale_notenames(variables.current_scale_notename,variables.current_scale)

    document.getElementById('chordnotes').innerHTML = `The notes for the selected chord are ${chordnotes}`
    document.getElementById('scalenotes').innerHTML = `The notes for the selected scale are ${scalenotes}`
}

function calc_and_push_scale() {
    console.log(`\n\n\n\nScale calculating!`)

    scalenote_form = document.getElementById('selectscalenote')
    scale_form = document.getElementById('selectscale')

    variables.current_scale_notename = scalenote_form.value
    variables.current_scale = scale_form.value

    log_variables()

    chordnotes = calc_chord_notenames(variables.current_chord_notename,variables.current_chord)
    scalenotes = calc_scale_notenames(variables.current_scale_notename,variables.current_scale)

    document.getElementById('chordnotes').innerHTML = `The notes for the selected chord are ${chordnotes}`
    document.getElementById('scalenotes').innerHTML = `The notes for the selected scale are ${scalenotes}`
}

calc_and_push_chord()
calc_and_push_scale()
