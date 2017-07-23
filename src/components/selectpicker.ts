import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <select v-model="selected">
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
    $(this.$el).selectpicker();
    $(this.$el).on('change', function() {
      vm.$emit('change', $(this).selectpicker('val'));
    });
    $(this.$el).selectpicker('val', this['value']);
  }

  destroyed() {
    $(this.$el).off().selectpicker('destroy');
  }
}
