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
                                {
                                    'Global': [
                                        'interpreter/objects/attributes/detailed/global/g.locale',
                                        'interpreter/objects/attributes/detailed/global/g.prefix',
                                        'interpreter/objects/attributes/detailed/global/g.profanity_level',
                                        'interpreter/objects/attributes/detailed/global/g.rank_speed'
                                    ]
                                },
                                {
                                    'Member': [
                                        'interpreter/objects/attributes/detailed/member/m.regex'
                                    ]
                                },
                                {
                                    'Portal': [
                                        'interpreter/objects/attributes/detailed/portal/p.ann_announce',
                                        'interpreter/objects/attributes/detailed/portal/p.ann_user',
                                        'interpreter/objects/attributes/detailed/portal/p.locale',
                                        'interpreter/objects/attributes/detailed/portal/p.no_bots',
                                        'interpreter/objects/attributes/detailed/portal/p.regex_overwrite',
                                        'interpreter/objects/attributes/detailed/portal/p.regex',
                                        'interpreter/objects/attributes/detailed/portal/p.render',
                                        'interpreter/objects/attributes/detailed/portal/p.user_limit',
                                        'interpreter/objects/attributes/detailed/portal/p.v.regex'
                                    ]
                                },
                                {
                                    'Voice': [
                                        'interpreter/objects/attributes/detailed/voice/v.ann_announce',
                                        'interpreter/objects/attributes/detailed/voice/v.ann_user',
                                        'interpreter/objects/attributes/detailed/voice/v.locale',
                                        'interpreter/objects/attributes/detailed/voice/v.no_bots',
                                        'interpreter/objects/attributes/detailed/voice/v.position',
                                        'interpreter/objects/attributes/detailed/voice/v.regex',
                                        'interpreter/objects/attributes/detailed/voice/v.render',
                                        'interpreter/objects/attributes/detailed/voice/v.user_limit'
                                    ]
                                }
                            ]
                        }
                    ],
                    Variables: [
                        'interpreter/objects/variables/description',
                        {
                            'All Variables': [
                                {
                                    'General': [
                                        'interpreter/objects/variables/detailed/general/creator_portal',
                                        'interpreter/objects/variables/detailed/general/creator_voice',
                                        'interpreter/objects/variables/detailed/general/slash',
                                        'interpreter/objects/variables/detailed/general/double_slash'
                                    ]
                                },
                                {
                                    'Member': [
                                        'interpreter/objects/variables/detailed/member/member_list',
                                        'interpreter/objects/variables/detailed/member/member_count',
                                        'interpreter/objects/variables/detailed/member/member_active_count',
                                        'interpreter/objects/variables/detailed/member/member_with_status',
                                        'interpreter/objects/variables/detailed/member/member_history'
                                    ]
                                },
                                {
                                    'Status': [
                                        'interpreter/objects/variables/detailed/status/status_list',
                                        'interpreter/objects/variables/detailed/status/status_count',
                                        'interpreter/objects/variables/detailed/status/status_history',
                                    ]
                                },
                                {
                                    'Time': [
                                        'interpreter/objects/variables/detailed/time/date',
                                        'interpreter/objects/variables/detailed/time/day_number',
                                        'interpreter/objects/variables/detailed/time/day_name',
                                        'interpreter/objects/variables/detailed/time/month_number',
                                        'interpreter/objects/variables/detailed/time/month_name',
                                        'interpreter/objects/variables/detailed/time/year',
                                        'interpreter/objects/variables/detailed/time/time',
                                        'interpreter/objects/variables/detailed/time/hour',
                                        'interpreter/objects/variables/detailed/time/minute',
                                        'interpreter/objects/variables/detailed/time/second'
                                    ]
                                }
                            ]
                        }
                    ],
                    Pipes: [
                        'interpreter/objects/pipes/description',
                        {
                            'All Pipes': [
                                'interpreter/objects/pipes/detailed/acronym',
                                'interpreter/objects/pipes/detailed/camelCase',
                                'interpreter/objects/pipes/detailed/capitalise',
                                'interpreter/objects/pipes/detailed/decapitalise',
                                'interpreter/objects/pipes/detailed/length',
                                'interpreter/objects/pipes/detailed/lowerCase',
                                'interpreter/objects/pipes/detailed/populous_count',
                                'interpreter/objects/pipes/detailed/populous',
                                'interpreter/objects/pipes/detailed/snakeCase',
                                'interpreter/objects/pipes/detailed/souvlakiCase',
                                'interpreter/objects/pipes/detailed/titleCase',
                                'interpreter/objects/pipes/detailed/upperCase',
                                'interpreter/objects/pipes/detailed/words'
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
        },
        'ranking'
    ]
};