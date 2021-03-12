module.exports = {
    docs: [
        'descriptions',
        {
            Commands: [
                'commands/description',
                {
                    'All Commands': [
                        'commands/detailed/about',
                        'commands/detailed/announce',
                        'commands/detailed/announcement',
                        'commands/detailed/corona',
                        'commands/detailed/crypto',
                        'commands/detailed/delete',
                        'commands/detailed/focus',
                        'commands/detailed/force',
                        'commands/detailed/help',
                        'commands/detailed/ignore',
                        'commands/detailed/join',
                        'commands/detailed/joke',
                        'commands/detailed/leaderboard',
                        'commands/detailed/leave',
                        'commands/detailed/level',
                        'commands/detailed/music',
                        'commands/detailed/ping',
                        'commands/detailed/portal',
                        'commands/detailed/ranks',
                        'commands/detailed/role_assigner',
                        'commands/detailed/roll',
                        'commands/detailed/run',
                        'commands/detailed/set_ranks',
                        'commands/detailed/set',
                        'commands/detailed/setup',
                        'commands/detailed/state',
                        'commands/detailed/url',
                        'commands/detailed/weather',
                        'commands/detailed/whoami'
                    ]
                },
            ]
        },
        {
            'Text Interpreter': [
                'interpreter/description',
                {

                    Attributes: [
                        'interpreter/objects/attributes/description',
                        {
                            'All Attributes': [
                                'interpreter/objects/attributes/detailed/p.ann_announce',
                                'interpreter/objects/attributes/detailed/p.ann_announce',
                                'interpreter/objects/attributes/detailed/v.ann_announce',
                                'interpreter/objects/attributes/detailed/p.ann_user',
                                'interpreter/objects/attributes/detailed/v.ann_user',
                                'interpreter/objects/attributes/detailed/p.no_bots',
                                'interpreter/objects/attributes/detailed/v.no_bots',
                                'interpreter/objects/attributes/detailed/p.render',
                                'interpreter/objects/attributes/detailed/v.render',
                                'interpreter/objects/attributes/detailed/v.bitrate',
                                'interpreter/objects/attributes/detailed/g.prefix',
                                'interpreter/objects/attributes/detailed/g.rank_speed',
                                'interpreter/objects/attributes/detailed/g.profanity_level',
                                'interpreter/objects/attributes/detailed/g.locale',
                                'interpreter/objects/attributes/detailed/p.locale',
                                'interpreter/objects/attributes/detailed/v.locale',
                                'interpreter/objects/attributes/detailed/v.position',
                                'interpreter/objects/attributes/detailed/p.regex_overwrite',
                                'interpreter/objects/attributes/detailed/p.regex',
                                'interpreter/objects/attributes/detailed/p.v.regex',
                                'interpreter/objects/attributes/detailed/v.regex',
                                'interpreter/objects/attributes/detailed/m.regex',
                                'interpreter/objects/attributes/detailed/p.user_limit',
                                'interpreter/objects/attributes/detailed/v.user_limit'
                            ]
                        }
                    ],
                    Variables: [
                        'interpreter/objects/variables/description',
                        {
                            'All Variables': [
                                'interpreter/objects/variables/detailed/slash',
                                'interpreter/objects/variables/detailed/double_slash',
                                'interpreter/objects/variables/detailed/creator_portal',
                                'interpreter/objects/variables/detailed/creator_voice',
                                'interpreter/objects/variables/detailed/date',
                                'interpreter/objects/variables/detailed/day_number',
                                'interpreter/objects/variables/detailed/day_name',
                                'interpreter/objects/variables/detailed/month_number',
                                'interpreter/objects/variables/detailed/month_name',
                                'interpreter/objects/variables/detailed/year',
                                'interpreter/objects/variables/detailed/time',
                                'interpreter/objects/variables/detailed/hour',
                                'interpreter/objects/variables/detailed/minute',
                                'interpreter/objects/variables/detailed/second',
                                'interpreter/objects/variables/detailed/status_list',
                                'interpreter/objects/variables/detailed/status_count',
                                'interpreter/objects/variables/detailed/status_history',
                                'interpreter/objects/variables/detailed/member_list',
                                'interpreter/objects/variables/detailed/member_count',
                                'interpreter/objects/variables/detailed/member_active_count',
                                'interpreter/objects/variables/detailed/member_with_status',
                                'interpreter/objects/variables/detailed/member_history'
                            ]
                        }
                    ],
                    Pipes: [
                        'interpreter/objects/pipes/description',
                        {
                            'All Pipes': [
                                'interpreter/objects/pipes/detailed/upperCase',
                                'interpreter/objects/pipes/detailed/lowerCase',
                                'interpreter/objects/pipes/detailed/capitalise',
                                'interpreter/objects/pipes/detailed/decapitalise',
                                'interpreter/objects/pipes/detailed/souvlakiCase',
                                'interpreter/objects/pipes/detailed/snakeCase',
                                'interpreter/objects/pipes/detailed/titleCase',
                                'interpreter/objects/pipes/detailed/camelCase',
                                'interpreter/objects/pipes/detailed/acronym',
                                'interpreter/objects/pipes/detailed/word',
                                'interpreter/objects/pipes/detailed/populous_count',
                                'interpreter/objects/pipes/detailed/populous',
                                'interpreter/objects/pipes/detailed/summary_count'
                            ]
                        }
                    ],
                    Structures: [
                        'interpreter/objects/structures/description',
                        {
                            'All Structures': [
                                'interpreter/objects/structures/detailed/if'
                            ]
                        }
                    ]

                }
            ]
        }
    ]
};