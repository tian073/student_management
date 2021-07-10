<template>
  <div>
    <br>
    <h3>CẬP NHẬP SINH VIÊN</h3>
    <br>
    <div class="row">
      <div class="col-md-8">
        <form>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label"
              >Họ và tên</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                placeholder="Họ và tên"
                v-model="user.name"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label"
              >Email</label
            >
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="inputPassword3"
                placeholder="Email"
                v-model="user.email"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label"
              >Số điện thoại</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword3"
                placeholder="Số điện thoại"
                v-model="user.phone"
              />
            </div>
          </div>
          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-2 pt-0">Giới tính</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="nam"
                    checked
                    v-model="user.gender"
                  />
                  <label class="form-check-label" for="gridRadios1">
                    Nam
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="nữ"
                    v-model="user.gender"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Nữ
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div class="form-group row">
            <div class="col-sm-10">
              <button
                  type="submit"
                  class="btn btn-primary"
                  @click.prevent="save">Lưu lại</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <p>{{user.name}}</p>
    <p>{{user.email}}</p>
    <p>{{user.phone}}</p>
    <p>{{user.gender}}</p>

  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        phone: '',
        gender: 'Nữ'
      },
      id: this.$route.params.id
    }
  },
  methods: {
      save() {
        this.$store.state.users.splice(this.id, 1, this.user);
        this.$router.push({name: 'user'})
      }
  }
};
</script>
<style>
</style>