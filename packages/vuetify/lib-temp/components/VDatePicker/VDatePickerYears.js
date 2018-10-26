import '../../stylus/components/_date-picker-years.styl';
// Mixins
import Colorable from '../../mixins/colorable';
// Utils
import { createNativeLocaleFormatter } from './util';
/* @vue/component */
export default {
    name: 'v-date-picker-years',
    mixins: [Colorable],
    props: {
        format: {
            type: Function,
            default: null
        },
        locale: {
            type: String,
            default: 'en-us'
        },
        min: [Number, String],
        max: [Number, String],
        value: [Number, String]
    },
    data() {
        return {
            defaultColor: 'primary'
        };
    },
    computed: {
        formatter() {
            return this.format || createNativeLocaleFormatter(this.locale, { year: 'numeric', timeZone: 'UTC' }, { length: 4 });
        }
    },
    mounted() {
        const activeItem = this.$el.getElementsByClassName('active')[0];
        if (activeItem) {
            this.$el.scrollTop = activeItem.offsetTop - this.$el.offsetHeight / 2 + activeItem.offsetHeight / 2;
        }
        else {
            this.$el.scrollTop = this.$el.scrollHeight / 2 - this.$el.offsetHeight / 2;
        }
    },
    methods: {
        genYearItem(year) {
            const formatted = this.formatter(`${year}`);
            const active = parseInt(this.value, 10) === year;
            const color = active && (this.color || 'primary');
            return this.$createElement('li', this.setTextColor(color, {
                key: year,
                'class': { active },
                on: {
                    click: () => this.$emit('input', year)
                }
            }), formatted);
        },
        genYearItems() {
            const children = [];
            const selectedYear = this.value ? parseInt(this.value, 10) : new Date().getFullYear();
            const maxYear = this.max ? parseInt(this.max, 10) : (selectedYear + 100);
            const minYear = Math.min(maxYear, this.min ? parseInt(this.min, 10) : (selectedYear - 100));
            for (let year = maxYear; year >= minYear; year--) {
                children.push(this.genYearItem(year));
            }
            return children;
        }
    },
    render() {
        return this.$createElement('ul', {
            staticClass: 'v-date-picker-years',
            ref: 'years'
        }, this.genYearItems());
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVkRhdGVQaWNrZXJZZWFycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZEYXRlUGlja2VyL1ZEYXRlUGlja2VyWWVhcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxpREFBaUQsQ0FBQTtBQUV4RCxTQUFTO0FBQ1QsT0FBTyxTQUFTLE1BQU0sd0JBQXdCLENBQUE7QUFFOUMsUUFBUTtBQUNSLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLFFBQVEsQ0FBQTtBQUVwRCxvQkFBb0I7QUFDcEIsZUFBZTtJQUNiLElBQUksRUFBRSxxQkFBcUI7SUFFM0IsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO0lBRW5CLEtBQUssRUFBRTtRQUNMLE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLElBQUk7U0FDZDtRQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLE9BQU87U0FDakI7UUFDRCxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3JCLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDckIsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztLQUN4QjtJQUVELElBQUk7UUFDRixPQUFPO1lBQ0wsWUFBWSxFQUFFLFNBQVM7U0FDeEIsQ0FBQTtJQUNILENBQUM7SUFFRCxRQUFRLEVBQUU7UUFDUixTQUFTO1lBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLDJCQUEyQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3JILENBQUM7S0FDRjtJQUVELE9BQU87UUFDTCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQy9ELElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUE7U0FDcEc7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUE7U0FDM0U7SUFDSCxDQUFDO0lBRUQsT0FBTyxFQUFFO1FBQ1AsV0FBVyxDQUFFLElBQUk7WUFDZixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQTtZQUMzQyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUE7WUFDaEQsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQTtZQUVqRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFO2dCQUN4RCxHQUFHLEVBQUUsSUFBSTtnQkFDVCxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUU7Z0JBQ25CLEVBQUUsRUFBRTtvQkFDRixLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO2lCQUN2QzthQUNGLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUNoQixDQUFDO1FBQ0QsWUFBWTtZQUNWLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQTtZQUNuQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtZQUNyRixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLENBQUE7WUFDeEUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFFM0YsS0FBSyxJQUFJLElBQUksR0FBRyxPQUFPLEVBQUUsSUFBSSxJQUFJLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRTtnQkFDaEQsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7YUFDdEM7WUFFRCxPQUFPLFFBQVEsQ0FBQTtRQUNqQixDQUFDO0tBQ0Y7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRTtZQUMvQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLEdBQUcsRUFBRSxPQUFPO1NBQ2IsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQTtJQUN6QixDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vLi4vc3R5bHVzL2NvbXBvbmVudHMvX2RhdGUtcGlja2VyLXllYXJzLnN0eWwnXG5cbi8vIE1peGluc1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9taXhpbnMvY29sb3JhYmxlJ1xuXG4vLyBVdGlsc1xuaW1wb3J0IHsgY3JlYXRlTmF0aXZlTG9jYWxlRm9ybWF0dGVyIH0gZnJvbSAnLi91dGlsJ1xuXG4vKiBAdnVlL2NvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAndi1kYXRlLXBpY2tlci15ZWFycycsXG5cbiAgbWl4aW5zOiBbQ29sb3JhYmxlXSxcblxuICBwcm9wczoge1xuICAgIGZvcm1hdDoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBsb2NhbGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdlbi11cydcbiAgICB9LFxuICAgIG1pbjogW051bWJlciwgU3RyaW5nXSxcbiAgICBtYXg6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgdmFsdWU6IFtOdW1iZXIsIFN0cmluZ11cbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVmYXVsdENvbG9yOiAncHJpbWFyeSdcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBmb3JtYXR0ZXIgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0IHx8IGNyZWF0ZU5hdGl2ZUxvY2FsZUZvcm1hdHRlcih0aGlzLmxvY2FsZSwgeyB5ZWFyOiAnbnVtZXJpYycsIHRpbWVab25lOiAnVVRDJyB9LCB7IGxlbmd0aDogNCB9KVxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBjb25zdCBhY3RpdmVJdGVtID0gdGhpcy4kZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJylbMF1cbiAgICBpZiAoYWN0aXZlSXRlbSkge1xuICAgICAgdGhpcy4kZWwuc2Nyb2xsVG9wID0gYWN0aXZlSXRlbS5vZmZzZXRUb3AgLSB0aGlzLiRlbC5vZmZzZXRIZWlnaHQgLyAyICsgYWN0aXZlSXRlbS5vZmZzZXRIZWlnaHQgLyAyXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsLnNjcm9sbFRvcCA9IHRoaXMuJGVsLnNjcm9sbEhlaWdodCAvIDIgLSB0aGlzLiRlbC5vZmZzZXRIZWlnaHQgLyAyXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5ZZWFySXRlbSAoeWVhcikge1xuICAgICAgY29uc3QgZm9ybWF0dGVkID0gdGhpcy5mb3JtYXR0ZXIoYCR7eWVhcn1gKVxuICAgICAgY29uc3QgYWN0aXZlID0gcGFyc2VJbnQodGhpcy52YWx1ZSwgMTApID09PSB5ZWFyXG4gICAgICBjb25zdCBjb2xvciA9IGFjdGl2ZSAmJiAodGhpcy5jb2xvciB8fCAncHJpbWFyeScpXG5cbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGVFbGVtZW50KCdsaScsIHRoaXMuc2V0VGV4dENvbG9yKGNvbG9yLCB7XG4gICAgICAgIGtleTogeWVhcixcbiAgICAgICAgJ2NsYXNzJzogeyBhY3RpdmUgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy4kZW1pdCgnaW5wdXQnLCB5ZWFyKVxuICAgICAgICB9XG4gICAgICB9KSwgZm9ybWF0dGVkKVxuICAgIH0sXG4gICAgZ2VuWWVhckl0ZW1zICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gW11cbiAgICAgIGNvbnN0IHNlbGVjdGVkWWVhciA9IHRoaXMudmFsdWUgPyBwYXJzZUludCh0aGlzLnZhbHVlLCAxMCkgOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcbiAgICAgIGNvbnN0IG1heFllYXIgPSB0aGlzLm1heCA/IHBhcnNlSW50KHRoaXMubWF4LCAxMCkgOiAoc2VsZWN0ZWRZZWFyICsgMTAwKVxuICAgICAgY29uc3QgbWluWWVhciA9IE1hdGgubWluKG1heFllYXIsIHRoaXMubWluID8gcGFyc2VJbnQodGhpcy5taW4sIDEwKSA6IChzZWxlY3RlZFllYXIgLSAxMDApKVxuXG4gICAgICBmb3IgKGxldCB5ZWFyID0gbWF4WWVhcjsgeWVhciA+PSBtaW5ZZWFyOyB5ZWFyLS0pIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaCh0aGlzLmdlblllYXJJdGVtKHllYXIpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hpbGRyZW5cbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndWwnLCB7XG4gICAgICBzdGF0aWNDbGFzczogJ3YtZGF0ZS1waWNrZXIteWVhcnMnLFxuICAgICAgcmVmOiAneWVhcnMnXG4gICAgfSwgdGhpcy5nZW5ZZWFySXRlbXMoKSlcbiAgfVxufVxuIl19