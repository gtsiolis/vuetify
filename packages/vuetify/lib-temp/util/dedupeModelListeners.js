/**
 * Removes duplicate `@input` listeners when
 * using v-model with functional components
 *
 * @see https://github.com/vuetifyjs/vuetify/issues/4460
 */
export default function dedupeModelListeners(data) {
    if (data.model && data.on && data.on.input) {
        if (Array.isArray(data.on.input)) {
            const i = data.on.input.indexOf(data.model.callback);
            if (i > -1)
                data.on.input.splice(i, 1);
        }
        else {
            delete data.on.input;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVkdXBlTW9kZWxMaXN0ZW5lcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9kZWR1cGVNb2RlbExpc3RlbmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxPQUFPLFVBQVUsb0JBQW9CLENBQUUsSUFBZTtJQUMzRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtRQUMxQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNwRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUN2QzthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQTtTQUNyQjtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZOb2RlRGF0YSB9IGZyb20gJ3Z1ZSdcblxuLyoqXG4gKiBSZW1vdmVzIGR1cGxpY2F0ZSBgQGlucHV0YCBsaXN0ZW5lcnMgd2hlblxuICogdXNpbmcgdi1tb2RlbCB3aXRoIGZ1bmN0aW9uYWwgY29tcG9uZW50c1xuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXRpZnlqcy92dWV0aWZ5L2lzc3Vlcy80NDYwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZHVwZU1vZGVsTGlzdGVuZXJzIChkYXRhOiBWTm9kZURhdGEpOiB2b2lkIHtcbiAgaWYgKGRhdGEubW9kZWwgJiYgZGF0YS5vbiAmJiBkYXRhLm9uLmlucHV0KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5vbi5pbnB1dCkpIHtcbiAgICAgIGNvbnN0IGkgPSBkYXRhLm9uLmlucHV0LmluZGV4T2YoZGF0YS5tb2RlbC5jYWxsYmFjaylcbiAgICAgIGlmIChpID4gLTEpIGRhdGEub24uaW5wdXQuc3BsaWNlKGksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBkYXRhLm9uLmlucHV0XG4gICAgfVxuICB9XG59XG4iXX0=