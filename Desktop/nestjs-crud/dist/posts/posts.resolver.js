"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const posts_service_1 = require("./posts.service");
const posts_entity_1 = require("./posts.entity");
const posts_input_1 = require("./posts.input");
let PostsResolver = class PostsResolver {
    constructor(postsService) {
        this.postsService = postsService;
    }
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postsService.findAll();
        });
    }
    getPost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postsService.findOneById(id);
        });
    }
    createPost(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postsService.create(input);
        });
    }
    removePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postsService.remove(id);
        });
    }
    updatePost(updateInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postsService.updatePost(updateInput.id, updateInput.updatePostInput);
        });
    }
};
__decorate([
    graphql_1.Query(() => [posts_entity_1.Posts]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "getPosts", null);
__decorate([
    graphql_1.Query(() => posts_entity_1.Posts),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "getPost", null);
__decorate([
    graphql_1.Mutation(() => posts_entity_1.Posts),
    __param(0, graphql_1.Args('createPostInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [posts_input_1.PostsInput]),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "createPost", null);
__decorate([
    graphql_1.Mutation(() => posts_entity_1.Posts),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "removePost", null);
__decorate([
    graphql_1.Mutation(() => posts_entity_1.Posts),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsResolver.prototype, "updatePost", null);
PostsResolver = __decorate([
    graphql_1.Resolver('Posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsResolver);
exports.PostsResolver = PostsResolver;
//# sourceMappingURL=posts.resolver.js.map