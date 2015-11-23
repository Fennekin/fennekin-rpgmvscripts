//=============================================================================
// DamageFunctions.js
//=============================================================================

/*:
 * @plugindesc  Allows you to make some minor tweaks to battle algorithms
 * @author      Benjamin Lee
 *
 * @param       Critical Formula
 * @desc        Type in a formula to determine crtical damage.
 *              Use the parameter 'damage' to get the damage of the attack.
 * @default     damage * 3
 *
 * @help        This contains some small algorithms to make minor changes to the damage algorithm.
 *
 * Current Implemented Features
 * - Change formula for critical hit damage (only simple math at the moment).
 */
(function() {
    var parameters = PluginManager.parameters('DamageFunctions');
    var critFormula = String(parameters['Critical Formula']);
    
    Game_Action.prototype.applyCritical = function(damage) {
        var critDamage;
        try {
            critDamage = eval(critFormula);
        }
        catch (e) {
            // Use default damage algorithm if invalid algorithm used
            critDamage = damage * 3;
        }
        return critDamage;
    };
})();