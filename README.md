# React Typescript SVG Playing Card components

A simple react component that renders svg playing cards by Adrian Kennard. Cards downloaded from https://www.me.uk/cards/ and distributed under CC0 license.

## Credits

[svg2react](https://www.npmjs.com/package/svg2react) used to create React components

This package is similar to [heruka-urgyen/react-playing-cards](https://github.com/heruka-urgyen/react-playing-cards). I discovered this package after I had rolled my own.

Used [this tutorial by Rupert 'fildon' McKay](https://blog.fildon.me/publishing-typescript-react-components-to-npm) to create npm package

Differences are
- We have Joker cards
- For now Only one set of cards instead of four
- We name cars Suit first rather than Rank first. ie S2 rather than 2s for 2 of spades. Makes it possible to have Two cahracter React component names matching the card names
- The SVGs are react components

## How the components were made

Got zipfile from [here](https://www.me.uk/cards/makeadeck.cgi)


unzip to a folder
make sure svg-to-react npm package is globally installed

```sh
# run svgtoreact. flip the two letter card names
for i in ??.svg;do orig=`echo $i|sed "s/.svg//"`; new=`echo $orig|rev`; svgtoreact $orig $new ;done
# rename .js to .tsx
for i in ??.js;do j=`echo $i|sed "s/.js//"`; mv $i $j.tsx;done
# Fix types
sed -i ''  's/(props)/(props: any)/g' *.tsx
# Generate map entries for cardsMap.ts

for i in  ??.tsx;do j=`echo $i|sed -e "s/.tsx//"`;echo $j: c.$j,;done
# Make index.tsx for importing cards
for i in  ??.tsx;do j=`echo $i|sed -e "s/.tsx//"`;echo "export {default as $j} from './$j'";done > index.tsx
```

