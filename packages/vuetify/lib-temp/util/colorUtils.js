import { consoleWarn } from './console';
export function colorToInt(color) {
    let rgb;
    if (typeof color === 'number') {
        rgb = color;
    }
    else if (typeof color === 'string') {
        let c = color[0] === '#' ? color.substring(1) : color;
        if (c.length === 3) {
            c = c.split('').map(char => char + char).join('');
        }
        if (c.length !== 6) {
            consoleWarn(`'${color}' is not a valid rgb color`);
        }
        rgb = parseInt(c, 16);
    }
    else {
        throw new TypeError(`Colors can only be numbers or strings, recieved ${color == null ? color : color.constructor.name} instead`);
    }
    if (rgb < 0) {
        consoleWarn(`Colors cannot be negative: '${color}'`);
        rgb = 0;
    }
    else if (rgb > 0xffffff || isNaN(rgb)) {
        consoleWarn(`'${color}' is not a valid rgb color`);
        rgb = 0xffffff;
    }
    return rgb;
}
export function intToHex(color) {
    let hexColor = color.toString(16);
    if (hexColor.length < 6)
        hexColor = '0'.repeat(6 - hexColor.length) + hexColor;
    return '#' + hexColor;
}
export function colorToHex(color) {
    return intToHex(colorToInt(color));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JVdGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2NvbG9yVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQU12QyxNQUFNLFVBQVUsVUFBVSxDQUFFLEtBQTJCO0lBQ3JELElBQUksR0FBRyxDQUFBO0lBRVAsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsR0FBRyxHQUFHLEtBQUssQ0FBQTtLQUNaO1NBQU0sSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDcEMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1FBQ3JELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtTQUNsRDtRQUNELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEIsV0FBVyxDQUFDLElBQUksS0FBSyw0QkFBNEIsQ0FBQyxDQUFBO1NBQ25EO1FBQ0QsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7S0FDdEI7U0FBTTtRQUNMLE1BQU0sSUFBSSxTQUFTLENBQUMsbURBQW1ELEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFBO0tBQ2pJO0lBRUQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1FBQ1gsV0FBVyxDQUFDLCtCQUErQixLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ3BELEdBQUcsR0FBRyxDQUFDLENBQUE7S0FDUjtTQUFNLElBQUksR0FBRyxHQUFHLFFBQVEsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDdkMsV0FBVyxDQUFDLElBQUksS0FBSyw0QkFBNEIsQ0FBQyxDQUFBO1FBQ2xELEdBQUcsR0FBRyxRQUFRLENBQUE7S0FDZjtJQUVELE9BQU8sR0FBRyxDQUFBO0FBQ1osQ0FBQztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUUsS0FBVTtJQUNsQyxJQUFJLFFBQVEsR0FBVyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRXpDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQUUsUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUE7SUFFOUUsT0FBTyxHQUFHLEdBQUcsUUFBUSxDQUFBO0FBQ3ZCLENBQUM7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFFLEtBQTJCO0lBQ3JELE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0FBQ3BDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25zb2xlV2FybiB9IGZyb20gJy4vY29uc29sZSdcblxuZXhwb3J0IHR5cGUgUkdCID0gbnVtYmVyXG5leHBvcnQgdHlwZSBYWVogPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl1cbmV4cG9ydCB0eXBlIExBQiA9IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXVxuXG5leHBvcnQgZnVuY3Rpb24gY29sb3JUb0ludCAoY29sb3I6IHN0cmluZyB8IG51bWJlciB8IHt9KTogUkdCIHtcbiAgbGV0IHJnYlxuXG4gIGlmICh0eXBlb2YgY29sb3IgPT09ICdudW1iZXInKSB7XG4gICAgcmdiID0gY29sb3JcbiAgfSBlbHNlIGlmICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgbGV0IGMgPSBjb2xvclswXSA9PT0gJyMnID8gY29sb3Iuc3Vic3RyaW5nKDEpIDogY29sb3JcbiAgICBpZiAoYy5sZW5ndGggPT09IDMpIHtcbiAgICAgIGMgPSBjLnNwbGl0KCcnKS5tYXAoY2hhciA9PiBjaGFyICsgY2hhcikuam9pbignJylcbiAgICB9XG4gICAgaWYgKGMubGVuZ3RoICE9PSA2KSB7XG4gICAgICBjb25zb2xlV2FybihgJyR7Y29sb3J9JyBpcyBub3QgYSB2YWxpZCByZ2IgY29sb3JgKVxuICAgIH1cbiAgICByZ2IgPSBwYXJzZUludChjLCAxNilcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBDb2xvcnMgY2FuIG9ubHkgYmUgbnVtYmVycyBvciBzdHJpbmdzLCByZWNpZXZlZCAke2NvbG9yID09IG51bGwgPyBjb2xvciA6IGNvbG9yLmNvbnN0cnVjdG9yLm5hbWV9IGluc3RlYWRgKVxuICB9XG5cbiAgaWYgKHJnYiA8IDApIHtcbiAgICBjb25zb2xlV2FybihgQ29sb3JzIGNhbm5vdCBiZSBuZWdhdGl2ZTogJyR7Y29sb3J9J2ApXG4gICAgcmdiID0gMFxuICB9IGVsc2UgaWYgKHJnYiA+IDB4ZmZmZmZmIHx8IGlzTmFOKHJnYikpIHtcbiAgICBjb25zb2xlV2FybihgJyR7Y29sb3J9JyBpcyBub3QgYSB2YWxpZCByZ2IgY29sb3JgKVxuICAgIHJnYiA9IDB4ZmZmZmZmXG4gIH1cblxuICByZXR1cm4gcmdiXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRUb0hleCAoY29sb3I6IFJHQik6IHN0cmluZyB7XG4gIGxldCBoZXhDb2xvcjogc3RyaW5nID0gY29sb3IudG9TdHJpbmcoMTYpXG5cbiAgaWYgKGhleENvbG9yLmxlbmd0aCA8IDYpIGhleENvbG9yID0gJzAnLnJlcGVhdCg2IC0gaGV4Q29sb3IubGVuZ3RoKSArIGhleENvbG9yXG5cbiAgcmV0dXJuICcjJyArIGhleENvbG9yXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xvclRvSGV4IChjb2xvcjogc3RyaW5nIHwgbnVtYmVyIHwge30pOiBzdHJpbmcge1xuICByZXR1cm4gaW50VG9IZXgoY29sb3JUb0ludChjb2xvcikpXG59XG4iXX0=