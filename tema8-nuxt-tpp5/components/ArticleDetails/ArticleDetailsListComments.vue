<template>
    <div class="col-lg-12">
        <div v-for="item in articleDetail" class="sidebar-item comments">
            <div class="sidebar-heading">
                <h2>{{ item.numberOfCommentsPost.content }} comments</h2>
            </div>
            <div class="content">
                <ul>
                    <li v-for="comment in item.listComments">
                        <div class="author-thumb">
                            <img :src="comment.srcAvatarImage" :alt="comment.altAvatarImage">
                        </div>
                        <div class="right-content">
                            <h4>{{ comment.fullName }}<span>{{ comment.date }}</span></h4>
                            <p v-html="comment.message"></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            articleDetail: "blog/listItems/getArticleDetail",
        }),
    },
}
</script>