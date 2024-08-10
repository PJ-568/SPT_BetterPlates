"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DATABASE_SERVER_RESOLVER = "DatabaseServer";
const FRONT_PLATE_COLLIDERS = [
    "LeftSideChestUp",
    "RightSideChestUp",
    "RibcageLow",
    "RibcageUp",
    "NeckFront"
];
const BACK_PLATE_COLLIDERS = ["SpineTop", "SpineDown", "NeckBack"];
const FRONT_PLATE_IDS = new Set([
    "654a4dea7c17dec2f50cc86a",
    "656f664200d62bcd2e024077",
    "656f66b5c6baea13cd07e108",
    "656f603f94b480b8a500c0d6",
    "656f57dc27aed95beb08f628",
    "656f611f94b480b8a500c0db",
    "656f63c027aed95beb08f62c",
    "656efd66034e8e01c407f35c",
    "657b22485f444d6dff0c6c2f",
    "65573fa5655447403702a816",
    "64afc71497cf3a403c01ff38",
    "64afdcb83efdfea28601d041",
    "655746010177119f4a097ff7",
    "656f9d5900d62bcd2e02407c",
    "656f9fa0498d1b7e3e071d98",
    "656fa0fb498d1b7e3e071d9c",
    "656fa25e94b480b8a500c0e0",
    "656fa53d94b480b8a500c0e4",
    "656fa61e94b480b8a500c0e8",
    "656fa76500d62bcd2e024080",
    "656fa8d700d62bcd2e024084",
    "656fa99800d62bcd2e024088",
    "656fac30c6baea13cd07e10c",
    "656fad8c498d1b7e3e071da0",
    "656fae5f7c2d57afe200c0d7",
    "656faf0ca0dce000a2020f77",
    "656fafe3498d1b7e3e071da4",
    "656fb0bd7c2d57afe200c0dc",
    "656fb21fa0dce000a2020f7c"
]);
const BACK_PLATE_IDS = new Set([
    "654a4a964b446df1ad03f192",
    "656efaf54772930db4031ff5",
    "657b2797c3dbcb01d60c35ea",
    "657b28d25f444d6dff0c6c77"
]);
class Mod {
    postDBLoad(container) {
        const databaseServer = container.resolve(DATABASE_SERVER_RESOLVER);
        const tables = databaseServer.getTables();
        let items = tables.templates.items;
        for (const item in items) {
            const itemId = items[item]._id, itemProps = items[item]._props;
            if (!itemProps.Slots) {
                continue;
            }
            this.updateArmorCollidersBasedOnId(itemId, itemProps);
        }
    }
    updateArmorCollidersBasedOnId(itemId, itemProps) {
        if (FRONT_PLATE_IDS.has(itemId)) {
            this.updateArmorColliders(["Front_plate", "front_plate"], itemProps, FRONT_PLATE_COLLIDERS);
        }
        if (BACK_PLATE_IDS.has(itemId)) {
            this.updateArmorColliders(["Back_plate", "back_plate"], itemProps, BACK_PLATE_COLLIDERS);
        }
    }
    updateArmorColliders(slotNames, props, colliders) {
        props.armorColliders = colliders;
        slotNames.forEach(slotName => {
            const slot = props.Slots.find(x => x._name === slotName);
            if (slot) {
                slot._props.filters[0].armorColliders = colliders;
            }
        });
    }
}
module.exports = { mod: new Mod() };
//# sourceMappingURL=mod.js.map