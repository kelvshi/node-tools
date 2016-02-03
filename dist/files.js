/**
 * 左侧菜单插件
 * @author kelvshi
 */
define('data/files', function(require, exports, module) {
    var menuJson = [{
    "id": 0,
    "name": "assets",
    "path": "assets",
    "covers": [],
    "children": [
        {
            "id": 1,
            "name": "images",
            "path": "assets/images",
            "pid": 0,
            "covers": [],
            "children": [
                {
                    "id": 2,
                    "name": "3D",
                    "path": "assets/images/3D",
                    "pid": 1,
                    "covers": [],
                    "children": [
                        {
                            "id": 3,
                            "name": "ABC",
                            "path": "assets/images/3D/ABC",
                            "pid": 2,
                            "covers": [
                                "test1.txt",
                                "test2.txt"
                            ]
                        },
                        {
                            "id": 4,
                            "name": "XYZ",
                            "path": "assets/images/3D/XYZ",
                            "pid": 2,
                            "covers": [
                                "test3.txt"
                            ]
                        }
                    ]
                },
                {
                    "id": 5,
                    "name": "JLB",
                    "path": "assets/images/JLB",
                    "pid": 1,
                    "covers": [],
                    "children": [
                        {
                            "id": 6,
                            "name": "2013",
                            "path": "assets/images/JLB/2013",
                            "pid": 5,
                            "covers": [],
                            "children": [
                                {
                                    "id": 7,
                                    "name": "201301",
                                    "path": "assets/images/JLB/2013/201301",
                                    "pid": 6,
                                    "covers": [
                                        "SSS.txt"
                                    ]
                                },
                                {
                                    "id": 8,
                                    "name": "201308",
                                    "path": "assets/images/JLB/2013/201308",
                                    "pid": 6,
                                    "covers": [
                                        "SSS - 副本 (2).txt",
                                        "SSS - 副本 (3).txt",
                                        "SSS - 副本.txt",
                                        "SSS.txt",
                                        "SSS2 - 副本 (2).txt",
                                        "SSS2 - 副本 (3).txt",
                                        "SSS2 - 副本.txt",
                                        "SSS2.txt"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 9,
                            "name": "2014",
                            "path": "assets/images/JLB/2014",
                            "pid": 5,
                            "covers": [],
                            "children": [
                                {
                                    "id": 10,
                                    "name": "201401",
                                    "path": "assets/images/JLB/2014/201401",
                                    "pid": 9,
                                    "covers": [
                                        "SSS.txt"
                                    ]
                                },
                                {
                                    "id": 11,
                                    "name": "201402",
                                    "path": "assets/images/JLB/2014/201402",
                                    "pid": 9,
                                    "covers": [
                                        "SSS - 副本 (2).txt",
                                        "SSS - 副本 (3).txt",
                                        "SSS - 副本.txt",
                                        "SSS.txt",
                                        "SSS2 - 副本 (2).txt",
                                        "SSS2 - 副本 (3).txt",
                                        "SSS2 - 副本.txt",
                                        "SSS2.txt"
                                    ]
                                }
                            ]
                        },
                        {
                            "id": 12,
                            "name": "2015",
                            "path": "assets/images/JLB/2015",
                            "pid": 5,
                            "covers": [],
                            "children": [
                                {
                                    "id": 13,
                                    "name": "201501",
                                    "path": "assets/images/JLB/2015/201501",
                                    "pid": 12,
                                    "covers": [
                                        "SSS.txt"
                                    ]
                                },
                                {
                                    "id": 14,
                                    "name": "201508",
                                    "path": "assets/images/JLB/2015/201508",
                                    "pid": 12,
                                    "covers": [
                                        "SSS - 副本 (2).txt",
                                        "SSS - 副本 (3).txt",
                                        "SSS - 副本.txt",
                                        "SSS.txt",
                                        "SSS2 - 副本 (2).txt",
                                        "SSS2 - 副本 (3).txt",
                                        "SSS2 - 副本.txt",
                                        "SSS2.txt"
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 15,
                    "name": "One",
                    "path": "assets/images/One",
                    "pid": 1,
                    "covers": [],
                    "children": [
                        {
                            "id": 16,
                            "name": "201301",
                            "path": "assets/images/One/201301",
                            "pid": 15,
                            "covers": [
                                "ada.txt",
                                "adadddd.txt"
                            ]
                        },
                        {
                            "id": 17,
                            "name": "201501",
                            "path": "assets/images/One/201501",
                            "pid": 15,
                            "covers": []
                        }
                    ]
                }
            ]
        }
    ]
}];

    module.exports = menuJson;
});