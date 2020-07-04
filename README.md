# sambr.co.uk main site

This is the git repo for sambr.co.uk root / www (redirects to the root) domains.

## Pages

1. index.html
2. music.html
3. photos.html
4. other.html
5. engine.html

### Index.html

This is the main page.

### Music.html

This page is for music.
It has embedded YouTube for the the Kalinka Balalaika Orchestra page, and also embedded SoundCloud for sambr.

### Photos.html

This page is for photos!

### Other.html

This page has links to other things.

1. To enginer.html for the chord and scale engine.
2. My github page.

### Engine.html

This page is a chord and scale calculation engine.
All chords and scales are worked out using functions on the client. New chords and scales definitions can be added easily to use the same logic as the others.

#### Chords and Scales are calculated by describing the required notes in two ways:
* In semitones, root = 0, with the term 'notenum'
* In degrees, root = 0, with the term 'degreenum'
Using these two properties of the required note to be calculated, and the given root note, the engine calculates the resulting note using the correct letter and accidental for the interval and degree of difference from the root note. For scales, there is an additional property that allows a scale to prefer to use just sharps (root is a natural or sharp) or just flats (root is a flat) for scales that do not comform to the standard degrees.