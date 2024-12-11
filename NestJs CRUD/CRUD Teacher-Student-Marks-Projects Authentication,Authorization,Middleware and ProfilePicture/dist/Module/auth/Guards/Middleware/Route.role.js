"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeRole = void 0;
exports.routeRole = {
    '/teacher/alldetail': ['admin', 'principal', 'teacher'],
    '/teacher': ['admin', 'principal'],
    '/student/alldetail': ['admin', 'principal', 'teacher', 'student'],
    '/student': ['admin', 'principal', 'teacher'],
    '/mark/alldetail': ['admin', 'principal', 'teacher', 'student'],
    '/mark': ['admin', 'principal', 'teacher'],
    '/project/alldetail': ['admin', 'principal', 'teacher', 'student'],
    '/project': ['admin', 'principal', 'teacher'],
};
//# sourceMappingURL=Route.role.js.map