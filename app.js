var Service = require("typedi").Service;
var Container = require("typedi").Container;

var PostRepository = Service(() => ({
    getName() {
        return "hello from post repository";
    }
}));

var PostManager = Service(() => ({
    getId() {
        return "some post id";
    }
}));

class PostQueryBuilder {
    build() {
        return "SUPER * QUERY";
    }
}

var PostController = Service([
    PostManager,
    PostRepository,
    PostQueryBuilder
], (manager, repository, queryBuilder) => {
    return {
        id: manager.getId(),
        name: repository.getName(),
        query: queryBuilder.build()
    };
});

var postController = Container.get(PostController);
console.log(postController);