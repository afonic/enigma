<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;

class RgbaValuesOnly extends Modifier
{
    /**
     * Modify a value.
     *
     * @param mixed  $value    The value to be modified
     * @param array  $params   Any parameters used in the modifier
     * @param array  $context  Contextual values
     * @return mixed
     */
    public function index($value, $params, $context)
    {
        if (empty($value)) {
            return null;
        }

        preg_match_all('~\(([^()]*)\)~', $value, $matches);

        if (empty($matches[1])) {
            return null;
        }

        return preg_replace('/,[^,]*$/', '', $matches[1][0]);
    }
}
