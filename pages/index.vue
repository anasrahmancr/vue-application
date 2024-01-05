    <template>
  <div class="container mt-5">
    <b-card>
      <ValidationObserver
        ref="observer"
        v-slot="{ errors }"
        @submit.prevent="onSubmit"
      >
        <b-form>
          <div class="row">
            <div class="col-md-6 mb-3">
              <ValidationProvider
                name="name"
                v-slot="{ errors }"
                rules="required|alpha_spaces|max:50"
              >
                <b-form-group :label="$t('form.name')" :label-for="name" class="mb-3">
                  <b-form-input
                    id="name"
                    v-model="formData.name"
                    :placeholder="$t('form.name')"
                  />
                  <span class="input-invalid-message">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>
            </div>

            <div class="col-md-6 mb-3">
              <ValidationProvider
                name="type"
                v-slot="{ errors }"
                rules="required"
              >
                <b-form-group :label="$t('form.type')" label-for="type" class="mb-3">
                  <div v-if="!types || types.length === 0">{{$t('form.noType')}}</div>
                  <b-form-select id="type" v-model="formData.types">
                    <option value="" disabled>{{$t('form.selectType')}}</option>
                    <option v-for="(type, index) in types" :key="index">
                      {{ type.name }}
                    </option>
                  </b-form-select>
                  <span class="input-invalid-message">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>
            </div>

            <div class="col-md-6 mb-3">
              <ValidationProvider
                name="category"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-group :label="$t('form.category')" class="mb-3">
                  <div>
                  <div v-if="!categories || categories.length === 0">{{$t('form.noCategory')}}</div>
                    <b-form-radio
                      v-for="(categoryOption, index) in categories"
                      :key="index"
                      v-model="formData.category"
                      :value="categoryOption.name"
                    >
                      {{ categoryOption.name }}
                    </b-form-radio>
                  </div>
                  <span class="input-invalid-message">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>
            </div>

            <div class="col-md-6 mb-3">
              <ValidationProvider
                name="email"
                v-slot="{ errors }"
                rules="required|email"
              >
                <b-form-group :label="$t('form.email')" label-for="email" class="mb-3">
                  <b-form-input
                    id="email"
                    v-model="formData.email"
                    :placeholder="$t('form.email')"
                  />
                  <span class="input-invalid-message">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>
            </div>

            <div class="col-md-6 mb-3">
              <MobileNumberInput v-model="formData.mobileNumber" />
            </div>

            <div class="col-md-6 mb-3">
              <ValidationProvider
                name="address"
                rules="required|max:200"
                v-slot="{ errors }"
              >
                <b-form-group :label="$t('form.address')" label-for="address" class="mb-3">
                  <b-form-textarea
                    id="address"
                    v-model="formData.address"
                    :placeholder="$t('form.address')"
                  />
                  <span class="input-invalid-message">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>
            </div>

            <div class="col-md-6 mb-3">
              <ZipCodeInput v-model="formData.zipCode" />
            </div>

            <div class="col-md-6 mb-3">
              <b-form-checkbox
                v-model="formData.isCertified"
                class="mt-3"
                @change="onCertificationChange"
              >
              {{ $t('form.isGovCertified') }}
              </b-form-checkbox>
            </div>

            <div class="col-md-6 mb-3">
              <ValidationProvider
                name="gstNo"
                rules="getGstNoRules()"
                v-slot="{ errors }"
              >
                <b-form-group
                  v-if="formData.isCertified"
                  :label="$t('form.gst')"
                  label-for="gstNo"
                  class="mt-3"
                >
                  <b-form-input
                    id="gstNo"
                    v-model="formData.gstNo"
                    :placeholder="$t('form.enterGST')"
                  />
                  <span class="input-invalid-message">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>
            </div>
          </div>
          <div class="text-center">
            <b-button
              class="mt-3"
              type="submit"
              variant="primary"
              :disabled="errors.length > 0"
            >
              {{$t('form.submit')}}
            </b-button>
          </div>
        </b-form>
      </ValidationObserver>
    </b-card>
  </div>
</template>
    
    <script>
import { mapState, mapMutations } from "vuex";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { defineComponent } from "vue";
import {
  BForm,
  BCard,
  BFormGroup,
  BFormSelect,
  BFormInput,
  BFormTextarea,
  BFormCheckbox,
  BButton,
} from "bootstrap-vue";
import MobileNumberInput from "../components/inputFields/MobileNumberInput.vue";
import ZipCodeInput from "../components/inputFields/ZipCodeInput.vue";
import CategoryManagement from "../components/CategoryManagement.vue";

export default defineComponent({
  components: {
    ValidationObserver,
    ValidationProvider,
    BForm,
    BCard,
    BFormGroup,
    BFormSelect,
    BFormInput,
    BFormTextarea,
    BFormCheckbox,
    BButton,
    MobileNumberInput,
    ZipCodeInput,
    CategoryManagement
  },

  data() {
    return {
      formData: {
        name: "",
        types: "",
        category: "",
        email: "",
        mobileNumber: "",
        address: "",
        zipCode: "",
        isCertified: false,
        gstNo: "",
      },
    };
  },

  computed:{
    categories(){
      return this.$store.getters.getCategories;
    }
  },

  methods: {
    onSubmit() {
      this.$refs.observer.validate().then((success) => {
        if (success) {
          this.$store
            .dispatch("submitForm", this.formData)
            
            .then(() => {
              const formDatas = this.$store.getters.getFormData;
            })

            .catch((error) => {
              console.error("Error updating form data:", error);
            });

        } else {
          alert("Fill All the Fields");
        }
      });
    },

    onCertificationChange() {
      // Clear GST No when certification status changes
      if (!this.formData.isCertified) {
        this.formData.gstNo = "";
      }
    },

    getGstNoRules() {
      return formData.isCertified ? "required|length:15" : "";
    },

    ...mapMutations(["updateFormData"]),  
  },

  computed: {
    categories(){
      return this.$store.getters.getCategories;
    },

    types(){
      return this.$store.getters.getTypes;
    } 
  },
});
</script>
    
    <style scoped>
</style>
    