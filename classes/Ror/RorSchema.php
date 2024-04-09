<?php
/**
 * @file classes/Ror/RorSchema.php
 *
 * @copyright (c) 2021+ TIB Hannover
 * @copyright (c) 2021+ Gazi Yücel
 * @license Distributed under the GNU GPL v3. For full terms see the file docs/COPYING.
 *
 * @class RorSchema
 * @brief Ror Schema
 */

namespace APP\plugins\generic\ror\classes\Ror;

class RorSchema
{
    /**
     * This method adds properties to the schema of a publication.
     *
     * @param string $hookName
     * @param array $args
     * @return bool
     */
    public function addToAuthor(string $hookName, array $args): bool
    {
        $schema = &$args[0];

        $schema->properties->{RorConstants::$idName} = (object)[
            'type' => 'string',
            'multilingual' => false,
            'apiSummary' => true,
            'validation' => ['nullable']
        ];

        return false;
    }
}
