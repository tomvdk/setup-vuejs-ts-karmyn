import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <select v-model="selected" @change='changeSelection($event.target.value)''>
      <optgroup label="Picnic">
        <option>Mustard</option>
        <option>Ketchup</option>
        <option>Relish</option>
      </optgroup>
      <optgroup label="Camping">
        <option>Tent</option>
        <option>Flashlight</option>
        <option>Toilet Paper</option>
      </optgroup>
    </select>
  `,
  props: ['options', 'value'],
  watch: {
    value(value) {
      $(this.$el).selectpicker('val', this['value']);
    },
    options(options) {
      $(this.$el).selectpicker('refresh');
    },
  },
})
export default class SelectPicker extends Vue {
  selected = false;

  mounted() {
    const vm = this;
    console.log(vm.selected);
    $(this.$el).selectpicker();
    // $(this.$el).on('change', function () {
    //   console.log($(this).selectpicker('val'))
    //   vm.$emit('change', $(this).selectpicker('val'));
    // });
    $(this.$el).selectpicker('val', this['value']);
  }

  changeSelection(val) {
    const vm = this;
    console.log(val)
    vm.$emit('change', val);
  }

  destroyed() {
    $(this.$el).off().selectpicker('destroy');
  }
}
