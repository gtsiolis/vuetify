// Extensions
import VWindow from '../VWindow/VWindow';
/* @vue/component */
export default VWindow.extend({
    name: 'v-tabs-items',
    inject: {
        registerItems: {
            default: null
        },
        tabProxy: {
            default: null
        },
        unregisterItems: {
            default: null
        }
    },
    props: {
        cycle: Boolean
    },
    watch: {
        internalValue(val) {
            /* istanbul ignore else */
            if (this.tabProxy)
                this.tabProxy(val);
        }
    },
    created() {
        this.registerItems && this.registerItems(this.changeModel);
    },
    beforeDestroy() {
        this.unregisterItems && this.unregisterItems();
    },
    methods: {
        changeModel(val) {
            this.internalValue = val;
        },
        // For backwards compatability with v1.2
        getValue(item, i) {
            /* istanbul ignore if */
            if (item.id)
                return item.id;
            return VWindow.options.methods.getValue.call(this, item, i);
        },
        next() {
            if (!this.cycle && this.internalIndex === this.items.length - 1) {
                return;
            }
            VWindow.options.methods.next.call(this);
        },
        prev() {
            if (!this.cycle && this.internalIndex === 0) {
                return;
            }
            VWindow.options.methods.prev.call(this);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVlRhYnNJdGVtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZUYWJzL1ZUYWJzSXRlbXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYTtBQUNiLE9BQU8sT0FBTyxNQUFNLG9CQUFvQixDQUFBO0FBRXhDLG9CQUFvQjtBQUNwQixlQUFlLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDNUIsSUFBSSxFQUFFLGNBQWM7SUFFcEIsTUFBTSxFQUFFO1FBQ04sYUFBYSxFQUFFO1lBQ2IsT0FBTyxFQUFFLElBQUk7U0FDZDtRQUNELFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRSxJQUFJO1NBQ2Q7UUFDRCxlQUFlLEVBQUU7WUFDZixPQUFPLEVBQUUsSUFBSTtTQUNkO0tBQ0Y7SUFFRCxLQUFLLEVBQUU7UUFDTCxLQUFLLEVBQUUsT0FBTztLQUNmO0lBRUQsS0FBSyxFQUFFO1FBQ0wsYUFBYSxDQUFFLEdBQUc7WUFDaEIsMEJBQTBCO1lBQzFCLElBQUksSUFBSSxDQUFDLFFBQVE7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QyxDQUFDO0tBQ0Y7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQ2hELENBQUM7SUFFRCxPQUFPLEVBQUU7UUFDUCxXQUFXLENBQUUsR0FBRztZQUNkLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFBO1FBQzFCLENBQUM7UUFDRCx3Q0FBd0M7UUFDeEMsUUFBUSxDQUFFLElBQUksRUFBRSxDQUFDO1lBQ2Ysd0JBQXdCO1lBQ3hCLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFBO1lBRTNCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzdELENBQUM7UUFDRCxJQUFJO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQy9ELE9BQU07YUFDUDtZQUVELE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDekMsQ0FBQztRQUNELElBQUk7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLENBQUMsRUFBRTtnQkFDM0MsT0FBTTthQUNQO1lBRUQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN6QyxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHRlbnNpb25zXG5pbXBvcnQgVldpbmRvdyBmcm9tICcuLi9WV2luZG93L1ZXaW5kb3cnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBWV2luZG93LmV4dGVuZCh7XG4gIG5hbWU6ICd2LXRhYnMtaXRlbXMnLFxuXG4gIGluamVjdDoge1xuICAgIHJlZ2lzdGVySXRlbXM6IHtcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIHRhYlByb3h5OiB7XG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICB1bnJlZ2lzdGVySXRlbXM6IHtcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9XG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICBjeWNsZTogQm9vbGVhblxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgaW50ZXJuYWxWYWx1ZSAodmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHRoaXMudGFiUHJveHkpIHRoaXMudGFiUHJveHkodmFsKVxuICAgIH1cbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVySXRlbXMgJiYgdGhpcy5yZWdpc3Rlckl0ZW1zKHRoaXMuY2hhbmdlTW9kZWwpXG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSAoKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVySXRlbXMgJiYgdGhpcy51bnJlZ2lzdGVySXRlbXMoKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjaGFuZ2VNb2RlbCAodmFsKSB7XG4gICAgICB0aGlzLmludGVybmFsVmFsdWUgPSB2YWxcbiAgICB9LFxuICAgIC8vIEZvciBiYWNrd2FyZHMgY29tcGF0YWJpbGl0eSB3aXRoIHYxLjJcbiAgICBnZXRWYWx1ZSAoaXRlbSwgaSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoaXRlbS5pZCkgcmV0dXJuIGl0ZW0uaWRcblxuICAgICAgcmV0dXJuIFZXaW5kb3cub3B0aW9ucy5tZXRob2RzLmdldFZhbHVlLmNhbGwodGhpcywgaXRlbSwgaSlcbiAgICB9LFxuICAgIG5leHQgKCkge1xuICAgICAgaWYgKCF0aGlzLmN5Y2xlICYmIHRoaXMuaW50ZXJuYWxJbmRleCA9PT0gdGhpcy5pdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBWV2luZG93Lm9wdGlvbnMubWV0aG9kcy5uZXh0LmNhbGwodGhpcylcbiAgICB9LFxuICAgIHByZXYgKCkge1xuICAgICAgaWYgKCF0aGlzLmN5Y2xlICYmIHRoaXMuaW50ZXJuYWxJbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgVldpbmRvdy5vcHRpb25zLm1ldGhvZHMucHJldi5jYWxsKHRoaXMpXG4gICAgfVxuICB9XG59KVxuIl19