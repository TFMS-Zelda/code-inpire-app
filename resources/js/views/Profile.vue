<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <TheProfile />
                    </div>

                    <div class="card-body"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TheProfile from "./../components/TheProfile";
export default {
    components: {
        TheProfile
    }
};
</script>
