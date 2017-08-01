import Vue from 'vue';
import Component from 'vue-class-component';
import * as $ from "jquery"

@Component({
    name: "dropdown",
    props: {
        uniqueId: {
            type: String,
            required: true,
        },
        prefix: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: false,
            default: '',
        },
        options: {
            type: Array,
            required: true,
        },
    }
})
export default class Dropdown extends Vue {
    uniqueId: String;
    prefix: String;
    value: String;
    options: any[];


    get id() {
        return `${this.prefix}_${this.uniqueId}`;
    }

    get selectedOption() {
        return this.value;
    }

    created() {
        console.log('in created')
    }

    mounted() {
        $(this.$el).selectpicker()
    }

    changeSelection(event) {
        console.log('in changeSelection')
        if (this.selectedOption !== event.target.value && event.target.value !== '') {
            this.$emit('selectionChanged', this.uniqueId, event.target.value);
        }
    }
}
