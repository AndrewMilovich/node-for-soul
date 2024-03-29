"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenRepository = void 0;
const typeorm_1 = require("typeorm");
const token_1 = require("../../entity/token");
class TokenRepository extends typeorm_1.Repository {
    async createToken(token) {
        return (0, typeorm_1.getManager)().getRepository(token_1.Token).save(token);
    }
    async findTokenByUserId(userId) {
        return (0, typeorm_1.getManager)().getRepository(token_1.Token).findOne({ userId });
    }
    async deleteByParams(params) {
        return (0, typeorm_1.getManager)().getRepository(token_1.Token).delete(params);
    }
}
exports.tokenRepository = new TokenRepository();
//# sourceMappingURL=tokenRepository.js.map