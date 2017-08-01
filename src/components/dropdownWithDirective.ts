import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
    name: "dropdown-with-directive"
})
export default class DropdownWithDirective extends Vue {
    @Prop({ required: true })
    uniqueId: string;

    @Prop({ required: true })
    prefix: string;

    @Prop({ default: "" })
    value: string;

    @Prop({ required: true })
    options: Array<any>;


    get id() {
        return `${this.prefix}_${this.uniqueId}`;
    }

    get selectedOption() {
        return this.value;
    }

    changeSelection(value: string) {
        console.log('in changeSelection with directive')
        if (this.selectedOption !== value && value !== '') {
            this.$emit('selectionChanged', this.uniqueId, value);
        }
    }
}
