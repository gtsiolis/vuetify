import Vue from 'vue';
import { filterObjectOnKeys } from '../util/helpers';
const availableProps = {
    absolute: Boolean,
    bottom: Boolean,
    fixed: Boolean,
    left: Boolean,
    right: Boolean,
    top: Boolean
};
export function factory(selected = []) {
    return Vue.extend({
        name: 'positionable',
        props: selected.length ? filterObjectOnKeys(availableProps, selected) : availableProps
    });
}
export default factory();
// Add a `*` before the second `/`
/* Tests /
let single = factory(['top']).extend({
  created () {
    this.top
    this.bottom
    this.absolute
  }
})

let some = factory(['top', 'bottom']).extend({
  created () {
    this.top
    this.bottom
    this.absolute
  }
})

let all = factory().extend({
  created () {
    this.top
    this.bottom
    this.absolute
    this.foobar
  }
})
/**/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25hYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21peGlucy9wb3NpdGlvbmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFBO0FBQ3JCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBR3BELE1BQU0sY0FBYyxHQUFHO0lBQ3JCLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLE1BQU0sRUFBRSxPQUFPO0lBQ2YsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUUsT0FBTztJQUNiLEtBQUssRUFBRSxPQUFPO0lBQ2QsR0FBRyxFQUFFLE9BQU87Q0FDYixDQUFBO0FBU0QsTUFBTSxVQUFVLE9BQU8sQ0FBRSxXQUFrQixFQUFFO0lBQzNDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNoQixJQUFJLEVBQUUsY0FBYztRQUNwQixLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjO0tBQ3ZGLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFRCxlQUFlLE9BQU8sRUFBRSxDQUFBO0FBRXhCLGtDQUFrQztBQUNsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IHsgZmlsdGVyT2JqZWN0T25LZXlzIH0gZnJvbSAnLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IHsgT3B0aW9uc1Z1ZSB9IGZyb20gJ3Z1ZS90eXBlcy92dWUnXG5cbmNvbnN0IGF2YWlsYWJsZVByb3BzID0ge1xuICBhYnNvbHV0ZTogQm9vbGVhbixcbiAgYm90dG9tOiBCb29sZWFuLFxuICBmaXhlZDogQm9vbGVhbixcbiAgbGVmdDogQm9vbGVhbixcbiAgcmlnaHQ6IEJvb2xlYW4sXG4gIHRvcDogQm9vbGVhblxufVxudHlwZSBwcm9wcyA9IFJlY29yZDxrZXlvZiB0eXBlb2YgYXZhaWxhYmxlUHJvcHMsIGJvb2xlYW4+XG5cbnR5cGUgc29tZVByb3BzPFMgZXh0ZW5kcyBrZXlvZiBwcm9wcz4gPSB7IFtQIGluIFNdOiBwcm9wc1tQXSB9XG50eXBlIHNvbWVQcm9wc0RlZjxTIGV4dGVuZHMga2V5b2YgcHJvcHM+ID0geyBbUCBpbiBTXTogdHlwZW9mIGF2YWlsYWJsZVByb3BzW1BdIH1cbnR5cGUgUG9zaXRpb25hYmxlPFMgZXh0ZW5kcyBrZXlvZiBwcm9wcz4gPSBPcHRpb25zVnVlPFZ1ZSwge30sIHt9LCB7fSwgc29tZVByb3BzPFM+LCBzb21lUHJvcHNEZWY8Uz4+XG5cbmV4cG9ydCBmdW5jdGlvbiBmYWN0b3J5IDxTIGV4dGVuZHMga2V5b2YgcHJvcHM+IChzZWxlY3RlZD86IFNbXSk6IFBvc2l0aW9uYWJsZTxTPlxuZXhwb3J0IGZ1bmN0aW9uIGZhY3RvcnkgKHNlbGVjdGVkOiB1bmRlZmluZWQpOiBPcHRpb25zVnVlPFZ1ZSwge30sIHt9LCB7fSwgcHJvcHMsIHR5cGVvZiBhdmFpbGFibGVQcm9wcz5cbmV4cG9ydCBmdW5jdGlvbiBmYWN0b3J5IChzZWxlY3RlZDogYW55W10gPSBbXSk6IGFueSB7XG4gIHJldHVybiBWdWUuZXh0ZW5kKHtcbiAgICBuYW1lOiAncG9zaXRpb25hYmxlJyxcbiAgICBwcm9wczogc2VsZWN0ZWQubGVuZ3RoID8gZmlsdGVyT2JqZWN0T25LZXlzKGF2YWlsYWJsZVByb3BzLCBzZWxlY3RlZCkgOiBhdmFpbGFibGVQcm9wc1xuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmYWN0b3J5KClcblxuLy8gQWRkIGEgYCpgIGJlZm9yZSB0aGUgc2Vjb25kIGAvYFxuLyogVGVzdHMgL1xubGV0IHNpbmdsZSA9IGZhY3RvcnkoWyd0b3AnXSkuZXh0ZW5kKHtcbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy50b3BcbiAgICB0aGlzLmJvdHRvbVxuICAgIHRoaXMuYWJzb2x1dGVcbiAgfVxufSlcblxubGV0IHNvbWUgPSBmYWN0b3J5KFsndG9wJywgJ2JvdHRvbSddKS5leHRlbmQoe1xuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLnRvcFxuICAgIHRoaXMuYm90dG9tXG4gICAgdGhpcy5hYnNvbHV0ZVxuICB9XG59KVxuXG5sZXQgYWxsID0gZmFjdG9yeSgpLmV4dGVuZCh7XG4gIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMudG9wXG4gICAgdGhpcy5ib3R0b21cbiAgICB0aGlzLmFic29sdXRlXG4gICAgdGhpcy5mb29iYXJcbiAgfVxufSlcbi8qKi9cbiJdfQ==