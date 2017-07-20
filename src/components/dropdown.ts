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
    },
    directives: {
        'selectpicker': {
            // bind: (el, binding) => { },
            inserted: (el) => {
                // console.log(el)
                $(el).selectpicker();
            },
            componentUpdated: (el, binding) => {
                if (binding.oldValue !== binding.value || binding.oldValue === '') {
                    $(el).selectpicker('refresh')
                    $(el).trigger('change');
                    console.log('selectepicker refresh')
                }
            },
            unbind: (el) => {
                $(el).selectpicker('destroy')
            }
        }
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
        console.log(this.options)
    }

    changeSelection(event) {
        if (this.selectedOption !== event.target.value && event.target.value !== '') {
            this.$emit('selectionChanged', this.uniqueId, event.target.value);
        }
    }

    // directive('selectpicker', {
    //   bind: function (el, binding) {
    //   },
    //   inserted: function (el) {
    //     $(el).selectpicker();
    //   },
    //   componentUpdated: function (el, binding) {
    //     //if (binding.oldValue !== binding.value || binding.oldValue === '') {
    //       $(el).selectpicker('refresh').trigger('change');
    //       //console.log('selectepicker resfresh')
    //     //}
    //   },
    //   unbind: function (el) {
    //     $(el).selectpicker('destroy')
    //   }
    // })
}
