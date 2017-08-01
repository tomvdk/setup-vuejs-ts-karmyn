import Vue, { VNodeDirective } from "vue";
import { DirectiveOptions, DirectiveFunction } from "vue/types/options";

export class selectpicker implements DirectiveOptions {
    bind(el: HTMLElement, binding: VNodeDirective) {
        //console.log('BIND');
        $(el).val(binding.value);
    };

    inserted(el: HTMLElement) {
        //console.log("inserted", el.id);
        $(el).selectpicker();
    };

    update(el: HTMLElement, binding: VNodeDirective) {
        //console.log("update ", el.id, " - NEW VALUE: ", binding.value);
        //console.log("update ", el.id, " - OLD VALUE: ", binding.oldValue);
        //console.log("update baby");
    };

    componentUpdated(el: HTMLElement, binding: VNodeDirective) {
        //console.log("componentUpdated ", el.id, " - NEW VALUE: ", binding.value);
        //console.log("componentUpdated ", el.id, " - OLD VALUE: ", binding.oldValue);
        $(el).selectpicker("refresh");
        $(el).trigger("change");
    };

    unbind(el: HTMLElement) {
        $(el).selectpicker("destroy");
    };
}
