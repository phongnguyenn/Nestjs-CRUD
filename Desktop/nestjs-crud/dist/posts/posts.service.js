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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const posts_entity_1 = require("./posts.entity");
const typeorm_2 = require("typeorm");
let PostsService = class PostsService {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postsRepository.find();
        });
    }
    findOneById(id) {
        return this.postsRepository.findOne(id);
    }
    create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = new posts_entity_1.Posts();
            post.title = input.title;
            post.content = input.content;
            return yield this.postsRepository.save(post);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findOneById(id);
            this.postsRepository.delete(id);
        });
    }
    updatePost(id, post) {
        return __awaiter(this, void 0, void 0, function* () {
            const existPost = yield this.findOneById(id);
            existPost.title = post && post.title ? post.title : existPost.title;
            existPost.content = post && post.content ? post.content : existPost.content;
            this.postsRepository.save(existPost);
        });
    }
};
PostsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(posts_entity_1.Posts)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map