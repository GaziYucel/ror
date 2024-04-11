/*
var rorPluginTemplate = pkp.Vue.compile(
    "<div class='pkpSearch'>" +
    "  <label>" +
    "    <input type='search' class='pkpSearch__input' id='rorIdSearch' v-model='searchPhrase' placeholder='currentSearchLabel'/>" +
    "    <span class='pkpSearch__icons'><icon icon='search' class='pkpSearch__icons--search' /></span>" +
    "  </label>" +
    "  <button class='pkpSearch__clear' v-if='searchPhrase' @click.prevent='clearSearchPhrase'>" +
    "      <icon icon='times' />" +
    "  </button>" +
    "</div>"
);
*/

var rorPluginTemplate = pkp.Vue.compile(`
    <div class="pkpFormField pkpFormField--text" :class="classes">
        <div class="pkpFormField__heading">
            <form-field-label
                :controlId="controlId"
                :label="label"
                :localeLabel="localeLabel"
                :isRequired="isRequired"
                :requiredLabel="__('common.required')"
                :multilingualLabel="multilingualLabel"
            />
            <tooltip
                v-if="isPrimaryLocale && tooltip"
                aria-hidden="true"
                :tooltip="tooltip"
                label=""
            />
            <span
                v-if="isPrimaryLocale && tooltip"
                class="-screenReader"
                :id="describedByTooltipId"
                v-strip-unsafe-html="tooltip"
            />
            <help-button
                v-if="isPrimaryLocale && helpTopic"
                :id="describedByHelpId"
                :topic="helpTopic"
                :section="helpSection"
                :label="__('help.help')"
            />
        </div>
        <div
            v-if="isPrimaryLocale && description"
            class="pkpFormField__description"
            v-strip-unsafe-html="description"
            :id="describedByDescriptionId"
        />
        <div class="pkpFormField__control" :class="controlClasses">
            <div class="pkpFormField__control_top">
                <span class='pkpSearch__icons'><icon icon='search' class='pkpSearch__icons--search' /></span>
                <input
                    class="pkpFormField__input pkpFormField--text__input"
                    ref="input"
                    v-model="currentValue"
                    :type="inputType"
                    :id="controlId"
                    :name="localizedName"
                    :aria-describedby="describedByIds"
                    :aria-invalid="errors && errors.length"
                    :disabled="isDisabled"
                    :required="isRequired"
                    :style="inputStyles"
                />
<!--                <span-->
<!--                    v-if="prefix"-->
<!--                    class="pkpFormField__inputPrefix"-->
<!--                    v-strip-unsafe-html="prefix"-->
<!--                    ref="prefix"-->
<!--                    :style="prefixStyles"-->
<!--                    @click="setFocus"-->
<!--                />-->
<!--                <multilingual-progress-->
<!--                    v-if="isMultilingual && locales.length > 1"-->
<!--                    :id="multilingualProgressId"-->
<!--                    :count="multilingualFieldsCompleted"-->
<!--                    :total="locales.length"-->
<!--                />-->
<!--                <pkp-button-->
<!--                    v-if="optIntoEdit && isDisabled"-->
<!--                    class="pkpFormField&#45;&#45;text__optIntoEdit"-->
<!--                    @click="isDisabled = false"-->
<!--                >-->
<!--                    {{ optIntoEditLabel }}-->
<!--                </pkp-button>-->
                <button 
                    class="pkpSearch__clear"
                    @click.prevent="clearSearchPhrase"
                    >
                    <icon icon="times" />
                </button>
            </div>
            <field-error
                v-if="errors && errors.length"
                :id="describedByErrorId"
                :messages="errors"
            />
        </div>
    </div>
`);

pkp.Vue.component("field-text-lookup", {
    name: "FieldTextLookup",
    extends: pkp.Vue.component("field-text"),
    data: {
        searchPhrase: ""
    },
    props: {
        searchPhrase: {
            type: String,
            required: false
        }
    },
    watch: {
        currentValue() {
            console.log(this.currentValue);
        },
        searchPhrase() {
            console.log(this.searchPhrase);
        }
    },
    methods: {
        clearSearchPhrase() {
            this.currentValue = "";
        }
    },
    render: function (h) {
        return rorPluginTemplate.render.call(this, h);
    },
    created() {
        console.log('hello-gazi-created');
    }
});
