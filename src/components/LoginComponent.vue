<template>

  <div class="container">
    <div class="grid mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card shadow">
            <div class="card-body">
              <h2 class="text-center p-3 mb-4 fw-bolder"> Ega User Login</h2>
              <form action="">
                <div class="form-group mt-2 pb-3">
                  <input type="text" v-model="username" placeholder="username" class="form-control">
                </div>
                <div class="form-group mt-2 pb-3">
                  <input type="password" v-model="password" placeholder="password" class="form-control">
                </div>
                <div class="form-group mt-2">
                  <div class="d-flex justify-content-between">
                    <p class="text-success"><sma>Don't have account</sma></p>
                    <p class="text-success"><small>Forgot Password</small></p>
                  </div>
                </div>
                <div class="form-group mt-1">
                  <input type="submit" value="Login" class="btn btn-success">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      username: "",
      password: ""
    }
  }
}
</script>

<style scoped>

</style>